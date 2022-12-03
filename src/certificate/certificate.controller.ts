/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Certificate } from "./schemas/certificate.schema";
import { CertificateService } from "./certificate.service";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { UpdateCertificateDto } from "./dto/update-certificate.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Certificate')
@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get()
  @ApiOperation({ summary: "Get all certificate orders" })
  @ApiResponse({status: 200, description: 'SUCCESS: All certificate orders received', type: [Certificate]})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getAllCertificates(): Promise<Certificate[]> {
    return this.certificateService.getCertificate();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Certificate received by id', type: Certificate})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Get certificate by id" })
  getCertificateByID(@Param('id') id: string): Promise<Certificate> {
    return this.certificateService.getCertificateByID(id);
  }

  @Post()
  @ApiResponse({status: 201, description: 'SUCCESS: New certificate order created', type: Certificate})
  @ApiOperation({ summary: "Create certificate order" })
  @ApiBody({type: CreateCertificateDto})
  createCertificate(@Body() createCertificateDto: CreateCertificateDto): Promise<Certificate> {
    return this.certificateService.createCertificate(createCertificateDto);
  }

  @Put(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Certificate order updated', type: Certificate})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Update certificate order with given id" })
  @ApiBody({type: UpdateCertificateDto})
  updateCertificate(
    @Body() updateCertificateDto: UpdateCertificateDto,
    @Param('id') id: string): Promise<Certificate> {
    return this.certificateService.updateCertificate(id, updateCertificateDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Certificate order deleted by id', type: Certificate})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Delete certificate order by id" })
  removeCertificate(@Param('id') id: string): Promise<Certificate> {
    return this.certificateService.removeCertificate(id);
  }

  @Delete()
  @ApiResponse({status: 200, description: 'SUCCESS: All certificate orders deleted'})
  @ApiOperation({ summary: "Delete all certificate orders" })
  removeAllCertificate(): Promise<Certificate> {
    return this.certificateService.removeAllCertificate();
  }
}