import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  BadRequestException,
  Headers,
  Logger,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FinishScheduleService } from './finishScheduleService';
import * as fs from 'fs';
import { PdfProcessingResult } from 'src/common/interfaces';

@Controller('pdf-upload')
export class PdfUploadController {
  private readonly logger = new Logger(PdfUploadController.name);

  constructor(private readonly pdfUploadService: FinishScheduleService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(
            Math.random() * 1e9,
          )}${extname(file.originalname)}`;
          cb(null, uniqueSuffix);
        },
      }),
      limits: { fileSize: 1000 * 1024 * 1024 }, // 1000 MB
      fileFilter: (req, file, cb) => {
        if (!file.originalname.toLowerCase().endsWith('.pdf')) {
          return cb(
            new BadRequestException('Only PDF files are allowed'),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { ocr: string },
    @Headers('authorization') authHeader: string,
  ): Promise<{ filename: string; search_result: PdfProcessingResult }> {
    try {
      const isOcr = body.ocr === 'true';
      this.logger.log('=== Starting file upload process ===');

      // Логування токена
      const token = authHeader?.split(' ')[1];
      this.logger.log(`Token provided: ${token ? 'Yes' : 'No'}`);

      if (!token) {
        throw new BadRequestException('No token provided');
      }

      const expectedToken = process.env.API_TOKEN;
      if (token !== expectedToken) {
        throw new BadRequestException('Invalid token');
      }

      // Детальне логування файла
      this.logger.log('=== File information ===');
      this.logger.log(`File exists: ${!!file}`);

      if (file) {
        this.logger.log(`Original name: ${file.originalname}`);
        this.logger.log(`Filename: ${file.filename}`);
        this.logger.log(`Path: ${file.path}`);
        this.logger.log(`Size: ${file.size} bytes`);
        this.logger.log(`Mimetype: ${file.mimetype}`);
        this.logger.log(`Encoding: ${file.encoding}`);
        this.logger.log(`Fieldname: ${file.fieldname}`);
        this.logger.log(`Buffer exists: ${!!file.buffer}`);
        this.logger.log(`Buffer length: ${file.buffer?.length || 'undefined'}`);

        // Перевіряємо, чи існує файл на диску
        if (file.path) {
          const fileExists = fs.existsSync(file.path);
          this.logger.log(`File exists on disk: ${fileExists}`);

          if (fileExists) {
            const stats = fs.statSync(file.path);
            this.logger.log(`File size on disk: ${stats.size} bytes`);
          }
        }
      }

      if (!file) {
        throw new BadRequestException('No file uploaded');
      }

      this.logger.log('=== Starting PDF processing ===');

      try {
        const result = await this.pdfUploadService.processPdfFinishSchedule(
          file,
          isOcr,
        );

        this.logger.log('=== PDF processing completed successfully ===');
        this.logger.log(`Result success: ${result.success}`);
        this.logger.log(`Result data type: ${typeof result.data}`);

        return { filename: file.originalname, search_result: result };
      } catch (error) {
        this.logger.error('=== Error during PDF processing ===');
        this.logger.error(`Error message: ${error.message}`);
        this.logger.error(`Error stack: ${error.stack}`);
        throw new BadRequestException(`Error processing PDF: ${error.message}`);
      } finally {
        this.logger.log('=== Cleanup phase ===');
        if (file.path && fs.existsSync(file.path)) {
          this.logger.log(`Removing temp file: ${file.path}`);
          fs.unlinkSync(file.path);
          this.logger.log('Temp file removed successfully');
        } else {
          this.logger.warn(`Temp file not found for cleanup: ${file.path}`);
        }
      }
    } catch (e: any) {
      this.logger.error(`=== Failed to upload or process PDF ===`);
      this.logger.error(`Error message: ${e.message}`);
      this.logger.error(`Error stack: ${e.stack}`);

      if (e instanceof BadRequestException) {
        throw e;
      }
      throw new BadRequestException(
        'Unexpected error occurred during file upload',
      );
    }
  }


  @Get()
  async executeOrder66(
    @Headers('authorization') authHeader: string,
  ): Promise<{ filename: string; search_result: PdfProcessingResult[] }> {
    try {
      // Логування токена
      const token = authHeader?.split(' ')[1];
      this.logger.log(`Token provided: ${token ? 'Yes' : 'No'}`);

      if (!token) {
        throw new BadRequestException('No token provided');
      }

      const expectedToken = process.env.API_TOKEN;
      if (token !== expectedToken) {
        throw new BadRequestException('Invalid token');
      }

      const fileArray = fs.readdirSync('./files');
      if (fileArray.length === 0) {
        throw new BadRequestException('No files to process');
      }

      let finalResult: any[] = []

      await Promise.all(
        fileArray.map(async (fileName) => {
          const filePath = `./files/${fileName}`;
          const fileStat = fs.statSync(filePath);
          const file: Express.Multer.File = {
            fieldname: 'file',
            originalname: fileName,
            encoding: '7bit',
            mimetype: 'application/pdf',
            size: fileStat.size,
            destination: './files',
            filename: fileName,
            stream: fs.createReadStream(filePath),
            path: filePath,
            buffer: fs.readFileSync(filePath),
          }

          // const isOcr = body.ocr === 'true';
          this.logger.log('=== Starting file upload process ===');

          // Детальне логування файла
          this.logger.log('=== File information ===');
          this.logger.log(`File exists: ${!!file}`);

          if (file) {
            this.logger.log(`Original name: ${file.originalname}`);
            this.logger.log(`Filename: ${file.filename}`);
            this.logger.log(`Path: ${file.path}`);
            this.logger.log(`Size: ${file.size} bytes`);
            this.logger.log(`Mimetype: ${file.mimetype}`);
            this.logger.log(`Encoding: ${file.encoding}`);
            this.logger.log(`Fieldname: ${file.fieldname}`);
            this.logger.log(`Buffer exists: ${!!file.buffer}`);
            this.logger.log(`Buffer length: ${file.buffer?.length || 'undefined'}`);

            // Перевіряємо, чи існує файл на диску
            if (file.path) {
              const fileExists = fs.existsSync(file.path);
              this.logger.log(`File exists on disk: ${fileExists}`);

              if (fileExists) {
                const stats = fs.statSync(file.path);
                this.logger.log(`File size on disk: ${stats.size} bytes`);
              }
            }
          }

          if (!file) {
            throw new BadRequestException('No file uploaded');
          }

          this.logger.log('=== Starting PDF processing ===');

          try {
            const result = await this.pdfUploadService.processPdfFinishSchedule(
              file,
              false,
            );

            this.logger.log('=== PDF processing completed successfully ===');
            this.logger.log(`Result success: ${result.success}`);
            this.logger.log(`Result data type: ${typeof result.data}`);
            finalResult.push(result)
            // return { filename: file.originalname, search_result: result };
          } catch (error) {
            this.logger.error('=== Error during PDF processing ===');
            this.logger.error(`Error message: ${error.message}`);
            this.logger.error(`Error stack: ${error.stack}`);
            throw new BadRequestException(`Error processing PDF: ${error.message}`);
          } finally {
            this.logger.log('=== Cleanup phase ===');
            if (file.path && fs.existsSync(file.path)) {
              this.logger.log(`Removing temp file: ${file.path}`);
              fs.unlinkSync(file.path);
              this.logger.log('Temp file removed successfully');
            } else {
              this.logger.warn(`Temp file not found for cleanup: ${file.path}`);
            }
          }
        })
      );

      return { filename: "all files", search_result: finalResult };
    } catch (e: any) {
      this.logger.error(`=== Failed to upload or process PDF ===`);
      this.logger.error(`Error message: ${e.message}`);
      this.logger.error(`Error stack: ${e.stack}`);

      if (e instanceof BadRequestException) {
        throw e;
      }
      throw new BadRequestException(
        'Unexpected error occurred during file upload',
      );
    }
  }
}
