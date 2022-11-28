/*eslint-disable*/
import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { QuestionsModule } from "./questions/questions.module";
import { FAQModule } from './faq/faq.module';
import { CertificateModule } from './certificate/certificate.module';
import { RationsModule } from './rations/rations.module';

@Module({
  imports: [
    ContactsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/"),
    QuestionsModule,
    FAQModule,
    CertificateModule,
    RationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
