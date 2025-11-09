import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as multer from 'multer';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as pdfParse from 'pdf-parse';
import { COMPARISON_RESULTS_FOLDER } from './logger';
import * as sharp from 'sharp';
import { promisify } from 'util';
import { exec } from 'child_process';
import { PdfProcessingResult } from '../../src/common/interfaces';
import { calcCost, normalizeAIResult } from '../../src/helpers/helpers';

const execAsync = promisify(exec);

@Injectable()
export class FinishScheduleService {
  private readonly openaiApiKey: string;
  private readonly tempDir = path.join(process.cwd(), 'temp');
  private readonly logger = new Logger(FinishScheduleService.name);

  constructor(private configService?: ConfigService) {
    // this.openaiApiKey = this.configService.get<string>('OPENAI_API_KEY');
    //process.env.OPEN_API_KEY
    this.openaiApiKey = process.env.OPEN_API_KEY;
    this.initTempDir();
  }

  private async initTempDir() {
    try {
      await fs.mkdir(path.resolve(this.tempDir), { recursive: true });
    } catch (error) {
      console.error('Failed to create temp directory:', error);
    }
  }

  /**
   * Process uploaded PDF file and extract finish schedule data
   */
  async processPdfFinishSchedule(
    file: Express.Multer.File,
    ocrProcessing = true,
    filename: string = '',
  ): Promise<any> {
  // ): Promise<PdfProcessingResult> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    if (file.mimetype !== 'application/pdf') {
      throw new BadRequestException('Only PDF files are allowed');
    }

    let tempFilePath: string;

    try {
      if (file.path) {
        this.logger.log(`Using file from disk: ${file.path}`);
        tempFilePath = file.path;
      } else if (file.buffer) {
        this.logger.log('Creating temp file from buffer');
        tempFilePath = path.join(
          this.tempDir,
          `${Date.now()}_${file.originalname}`,
        );
        await fs.writeFile(tempFilePath, file.buffer);
      } else {
        throw new BadRequestException(
          'File buffer and path are both undefined',
        );
      }

      this.logger.log(`Processing file: ${tempFilePath}`);

      let text = '';
      if (!ocrProcessing) {
        text = await this.convertPDFToText(tempFilePath);
      } else {
        const imagePath = await this.convertPDFToImage(tempFilePath);
        text = await this.getTextFromOCR(
          Buffer.from(await fs.readFile(imagePath)),
        );
        // await fs.writeFile(
        //   `${Math.random()}.txt`,
        //   JSON.stringify({ text }, null, 2),
        // );
      }

      const result = await this.processWithPDFText(text, filename);
      const normalizedResult = normalizeAIResult(result);
      return {
        wowee: "woee",
        text: text,
        success: true,
        data: normalizedResult,
      };
    } catch (error) {
      console.error('Error processing PDF:', error);
      return {
        success: false,
        data: 'not_found',
        error: error.message,
      };
    } finally {
      // Clean up temp file
      if (tempFilePath) {
        try {
          await fs.unlink(tempFilePath);
        } catch (cleanupError) {
          console.error('Failed to cleanup temp file:', cleanupError);
        }
      }
    }
  }

  /**
   * Convert PDF to images for vision API processing
   */
  private async convertPDFToImage(pdfPath: string) {
    const tempDir = './temp_pdf_images';
    const outputImagePath = '/app/images/pdf_conversion_result.jpg';
    try {
      try {
        await fs.access(tempDir);
      } catch {
        await fs.mkdir(tempDir);
      }

      const baseName = 'page';
      const ppmOutputPath = path.join(tempDir, baseName);

      await execAsync(`pdftoppm -jpeg -r 200 "${pdfPath}" "${ppmOutputPath}"`);

      const imageFiles = (await fs.readdir(tempDir))
        .filter((f) => f.endsWith('.jpg'))
        .map((f) => path.join(tempDir, f))
        .sort();

      if (imageFiles.length === 0)
        throw new Error('PDF to image conversion was not successful.');

      const buffers = await Promise.all(
        imageFiles.map((f) => sharp(f).toBuffer()),
      );
      const metadata = await sharp(buffers[0]).metadata();

      await sharp({
        create: {
          width: metadata.width!,
          height: metadata.height! * buffers.length,
          channels: 3,
          background: { r: 255, g: 255, b: 255 },
        },
      })
        .composite(
          buffers.map((input, i) => ({
            input,
            top: i * metadata.height!,
            left: 0,
          })),
        )
        .jpeg({ quality: 100 })
        .toFile(outputImagePath);

      return outputImagePath;
    } catch (error) {
      console.error('Error processing PDF:', error);
      return undefined;
    } finally {
      // Clean up temp file
      try {
        await fs.rm(tempDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error('Failed to cleanup temp file:', cleanupError);
      }
    }
  }

  /**
   * Convert PDF to raw text for AI processing
   */
  private async convertPDFToText(filePath: string): Promise<any> {
    const buffer = await fs.readFile(filePath);

    let text;
    await pdfParse(buffer).then((data) => {
      text = data.text;
    });

    return text;
  }

  /**
   * Give AI text and get parsing results
   */
  private async processWithPDFText(
    text: string,
    filename: string,
  ): Promise<any> {
    const prompt = this.buildVisionPrompt();

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
              {
                role: 'user',
                content: `${prompt}\n\nText:${text}`,
              },
            ],
            temperature: 0.1,
            max_tokens: 16384,
          }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
      }

      const aiResponse = await response.json();
      const content = aiResponse.choices[0].message.content.trim();

      const usage = aiResponse.usage;

      // await sendTelegramMessage('WWJWJWJWJ');
      // await sendTelegramMessage(
      //   `${filename} = ${calcCost('gpt-4o', usage.prompt_tokens, usage.completion_tokens)}`,
      // );

      await fs.mkdir('/app/temp/calculation', {
        recursive: true,
      });
      console.log('OWOJEFHNOJEBNFEFKJ');
      await fs.writeFile(
        `/app/temp/calculation/${filename}.json`,
        JSON.stringify(
          {
            cost: calcCost(
              'gpt-4o',
              usage.prompt_tokens,
              usage.completion_tokens,
            ),
            prompt_tokens: usage.prompt_tokens,
            completion_tokens: usage.completion_tokens,
          },
          null,
          2,
        ),
        'utf-8',
      );
      console.log('OWOJEFHNOJEBNFEFK224234234234J');

      await fs.mkdir(`${COMPARISON_RESULTS_FOLDER}/`, {
        recursive: true,
      });
      await fs.writeFile(
        `${COMPARISON_RESULTS_FOLDER}/AI RESULT0.json`,
        JSON.stringify({ ...aiResponse }, null, 2),
        'utf-8',
      );

      if (content === 'not_found') {
        return 'not_found';
      }

      try {
        return content;
      } catch (parseError) {
        console.error('Failed to parse AI response as JSON:', parseError);
        console.error('AI Response:', content);
        return 'not_found';
      }
    } catch (error) {
      console.error('AI text processing failed:', error);
      throw new Error('Failed to process text with AI');
    }
  }

  /**
   * Get text from OCR
   */
  private async getTextFromOCR(image: Buffer) {
    const results = await fetch(
      'https://www.ocrwebservice.com/restservices/processDocument?language=english&pagerange=allpages&tobw=true&gettext=true',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${process.env.OCR_USER}:${process.env.OCR_LICENSE}`,
            ).toString('base64'),
          'Content-Type': 'application/octet-stream',
        },
        body: image,
      } as any,
    );
    const data = await results.json();
    return data.OCRText;
  }

  /**
   * Build the vision prompt for analyzing PDF images
   */
  private buildVisionPrompt(image?: boolean): string {
    const basePrompt = `
      You are an expert in extracting structured data from DataSheets and technical documents.
      Extract the relevant fields from the provided document images or text and return them in JSON format.

      Document may contain multiple products. Each variant of a product should be represented as a separate entry in the JSON array.

      If a field is not present, use an empty string for that field.

      If the document does not contain any relevant finish schedule data, respond with "not_found".

      Fields to extract:

      productTypeId, collection, name, productNumber, Size, specSheet, Material,	FirePerformance`;

    return basePrompt;
  }

  //  Manufacturer, ProductName,
  //     Base, Coverage, IntendedUse, WetThickness, DryThickness, CoatingType, HumidityResistance, 
  //     Finish, collection, name, productNumber, imageFile, ColorName, ColorNumber, Size, specSheet, 
  //     msdsSheet, msdsSheet1, msdsSheet2, msdsSheet3, msdsSheet4, msdsSheet5, productTypeId, 
  //     installationSheet, URL, SKU, tagsKeywords, Volume, VolumeM, productId

  /**
   * Process PDF images with AI vision to get structured data
   */
  private async processWithAIVision(images: string[]): Promise<any> {
    const prompt = this.buildVisionPrompt(true);

    try {
      // Prepare messages with images
      const imageMessages = await Promise.all(
        images.map(async (imgPath) => {
          const imageBuffer = await fs.readFile(imgPath);
          const base64Image = imageBuffer.toString('base64');
          const ext = path.extname(imgPath).slice(1);
          return {
            type: 'image_url',
            image_url: {
              url: `data:image/${ext};base64,${base64Image}`,
              detail: 'high',
            },
          };
        }),
      );

      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'text',
                    text: prompt,
                  },
                  ...imageMessages,
                ],
              },
            ],
            temperature: 0.1,
            max_tokens: 16384,
          }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
      }

      const aiResponse = await response.json();
      const content = aiResponse.choices[0].message.content.trim();

      await fs.mkdir(`${COMPARISON_RESULTS_FOLDER}/`, {
        recursive: true,
      });
      await fs.writeFile(
        `${COMPARISON_RESULTS_FOLDER}/AI RESULT0.json`,
        JSON.stringify({ ...aiResponse }, null, 2),
        'utf-8',
      );

      if (content === 'not_found') {
        return 'not_found';
      }

      try {
        return content;
      } catch (parseError) {
        console.error('Failed to parse AI response as JSON:', parseError);
        console.error('AI Response:', content);
        return 'not_found';
      }
    } catch (error) {
      console.error('AI vision processing failed:', error);
      throw new Error('Failed to process images with AI vision');
    }
  }

  /**
   * Get multer configuration for file upload
   */
  getMulterConfig(): multer.Options {
    return {
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
      },
      fileFilter: (
        req,
        file,
        callback: (error: Error | null, acceptFile: boolean) => void,
      ) => {
        if (file.mimetype === 'application/pdf') {
          callback(null, true);
        } else {
          callback(new Error('Only PDF files are allowed'), false);
        }
      },
    };
  }
}
