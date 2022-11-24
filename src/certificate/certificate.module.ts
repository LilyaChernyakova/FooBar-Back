/*eslint-disable*/
import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Certificate, CertificateSchema } from "./schemas/certificate.schema";

@Module({
  providers: [CertificateService],
  controllers: [CertificateController],
  imports: [MongooseModule.forFeature([{ name: Certificate.name, schema: CertificateSchema }])]
})
export class CertificateModule {}
