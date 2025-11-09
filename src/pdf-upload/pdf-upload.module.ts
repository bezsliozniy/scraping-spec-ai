import { Module } from '@nestjs/common';
import { PdfUploadController } from './pdf-upload.controller';
import { FinishScheduleService } from './finishScheduleService';

@Module({
  controllers: [PdfUploadController],
  providers: [FinishScheduleService],
})
export class PdfUploadModule {}
