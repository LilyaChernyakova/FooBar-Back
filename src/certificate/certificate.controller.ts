/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Certificate } from "./schemas/certificate.schema";
import { CertificateService } from "./certificate.service";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { UpdateCertificateDto } from "./dto/update-certificate.dto";

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get()
  getAllCertificates(): Promise<Certificate[]> {
    return this.certificateService.getCertificate();
  }

  @Get(':id')
  getContactsByID(@Param('id') id: string): Promise<Certificate> {
    return this.certificateService.getCertificateByID(id);
  }

  @Post()
  createContacts(@Body() createCertificateDto: CreateCertificateDto): Promise<Certificate> {
    return this.certificateService.createCertificate(createCertificateDto);
  }

  @Put(':id')
  updateContacts(
    @Body() updateCertificateDto: UpdateCertificateDto,
    @Param('id') id: string): Promise<Certificate> {
    return this.certificateService.updateCertificate(id, updateCertificateDto);
  }

  @Delete(':id')
  removeContacts(@Param('id') id: string): Promise<Certificate> {
    return this.certificateService.removeCertificate(id);
  }

  @Delete()
  removeAllContacts(): Promise<Certificate> {
    return this.certificateService.removeAllCertificate();
  }
}