import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfUploadModule } from './pdf-upload/pdf-upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PdfUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
