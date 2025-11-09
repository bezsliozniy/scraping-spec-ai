import { FinishScheduleService } from './finishScheduleService';

import * as fs from 'fs';
import * as path from 'path';
import {
  appendToMainLog,
  createAIProductsReport,
  createLogFolders,
  deleteLogFolders,
} from './logger';
import { compareResult } from '../../src/comparitor/comparitor';
import { big_black_expected_results_array } from '../../test/finishScheduleData';

describe('Finish Schedule Product tests', () => {
  jest.setTimeout(1000 * 60 * 120);

  it('Should have correct number of products', async () => {
    await deleteLogFolders();

    await createLogFolders();

    for (const product of big_black_expected_results_array) {
      await appendToMainLog(`Started processing: ${product.fileName}`);

      const filePath = path.join(
        __dirname,
        '..',
        `./../files/${product.fileName}`,
      );

      const productLogFileName = `${product.fileName}.json`;

      const buffer = fs.readFileSync(filePath);
      const readStream = fs.createReadStream(filePath);
      const mockFile: Express.Multer.File = {
        fieldname: 'file',
        originalname: 'sample.pdf',
        encoding: '7bit',
        mimetype: 'application/pdf',
        size: buffer.length,
        buffer,
        destination: '',
        filename: 'sample.pdf',
        path: filePath,
        stream: readStream,
      };
      expect(mockFile).toBeDefined();

      const finishScheduleService = new FinishScheduleService();
      const result = await finishScheduleService.processPdfFinishSchedule(
        mockFile,
        false,
        product.fileName,
      );

      // const jsonData = finishScheduleService.normalizeToJSONable(result.data)

      await createAIProductsReport(productLogFileName, result.data);

      compareResult(product.fileName);

      await appendToMainLog(`Finished processing: ${product.fileName}`);
      readStream.close();
    }
    expect(1).toEqual(1);
  }, 0);
});
