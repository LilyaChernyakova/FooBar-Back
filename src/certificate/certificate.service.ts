/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Certificate, CertificateDocument } from "./schemas/certificate.schema";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { UpdateCertificateDto } from "./dto/update-certificate.dto";

export interface ReturnCertificate {
  id: string,
  name: string,
  phone: string
}

@Injectable()
export class CertificateService {
  private certificate = [];

  constructor(@InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>) {}

  async getCertificate(): Promise<ReturnCertificate[]> {
    let resultPromise = new Promise<ReturnCertificate[]>((resolve, reject) => {
      this.certificateModel.find().exec().then((result) => {
        const newResult = [];
        for (const res of result) {
          newResult.push({
            id: res.id,
            name: res.name,
            phone: res.phone
          });
        }
        resolve(newResult);
      });
    });

    return resultPromise;
  }

  async getCertificateByID(id: string): Promise<ReturnCertificate> {
    let resultPromise = new Promise<ReturnCertificate>((resolve, reject) => {
      this.certificateModel.findById(id).then((result) => {
        const newResult = {
          id: result.id,
          name: result.name,
          phone: result.phone
        }
        resolve(newResult);
      });
    });

    return resultPromise;
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
