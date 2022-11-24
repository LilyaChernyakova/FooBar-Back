/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Certificate, CertificateDocument } from "./schemas/certificate.schema";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { UpdateCertificateDto } from "./dto/update-certificate.dto";

@Injectable()
export class CertificateService {
  private certificate = [];

  constructor(@InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>) {}

  async getCertificate(): Promise<Certificate[]> {
    return this.certificateModel.find().exec();
  }

  async getCertificateByID(id: string): Promise<Certificate> {
    return this.certificateModel.findById(id);
  }

  async createCertificate(certificateDto: CreateCertificateDto) {
    const newCertificate = new this.certificateModel(certificateDto);
    return newCertificate.save();
  }

  async updateCertificate(id: string, certificateDto: UpdateCertificateDto): Promise<Certificate> {
    return this.certificateModel.findByIdAndUpdate(id, certificateDto, {new: true});
  }

  async removeCertificate(id: string): Promise<Certificate> {
    return this.certificateModel.findByIdAndRemove(id);
  }

  async removeAllCertificate(): Promise<Certificate> {
    return this.certificateModel.remove().exec();
  }
}
