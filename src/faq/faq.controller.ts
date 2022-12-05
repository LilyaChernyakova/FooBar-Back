/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FAQ } from "./schemas/FAQ.schema";
import { CreateFAQDto } from "./dto/create-FAQ.dto";
import { UpdateFAQDto } from "./dto/update-FAQ.dto";
import {FAQService} from "./faq.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('FAQ')
@Controller('faq')
export class FAQController {

  constructor(private readonly faqService: FAQService) {}

  @Get()
  @ApiOperation({ summary: "Get all FAQ" })
  @ApiResponse({status: 200, description: 'SUCCESS: All FAQ parts received', type: [FAQ]})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getAllFAQ(): Promise<FAQ[]> {
    return this.faqService.getFAQ();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get FAQ by id" })
  @ApiResponse({status: 200, description: 'SUCCESS: FAQ received by id', type: FAQ})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getFAQByID(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.getFAQByID(id);
  }

  @Post()
  @ApiOperation({ summary: "Create FAQ" })
  @ApiResponse({status: 201, description: 'SUCCESS: New FAQ created', type: FAQ})
  @ApiBody({type: CreateFAQDto})
  createFAQ(@Body() createFAQDto: CreateFAQDto): Promise<FAQ> {
    return this.faqService.createFAQ(createFAQDto);
  }

  @Put(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: FAQ updated', type: FAQ})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Update FAQ with given id" })
  @ApiBody({type: UpdateFAQDto})
  updateFAQ(
    @Body() updateFAQDto: UpdateFAQDto,
    @Param('id') id: string): Promise<FAQ> {
    return this.faqService.updateFAQ(id, updateFAQDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: FAQ deleted by id', type: FAQ})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Delete FAQ by id" })
  removeFAQ(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.removeFAQ(id);
  }

  @Delete()
  @ApiResponse({status: 200, description: 'SUCCESS: All FAQ deleted'})
  @ApiOperation({ summary: "Delete whole FAQ" })
  removeAllFAQ(): Promise<FAQ> {
    return this.faqService.removeAllFAQ();
  }
}
