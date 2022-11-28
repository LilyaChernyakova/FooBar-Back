/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FAQ } from "./schemas/FAQ.schema";
import { CreateFAQDto } from "./dto/create-FAQ.dto";
import { UpdateFAQDto } from "./dto/update-FAQ.dto";
import {FAQService, ReturnFAQ} from "./faq.service";

@Controller('faq')
export class FAQController {

  constructor(private readonly faqService: FAQService) {}

  @Get()
  getAllFAQ(): Promise<ReturnFAQ[]> {
    return this.faqService.getFAQ();
  }

  @Get(':id')
  getFAQByID(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.getFAQByID(id);
  }

  @Post()
  createFAQ(@Body() createFAQDto: CreateFAQDto): Promise<FAQ> {
    return this.faqService.createFAQ(createFAQDto);
  }

  @Put(':id')
  updateFAQ(
    @Body() updateFAQDto: UpdateFAQDto,
    @Param('id') id: string): Promise<FAQ> {
    return this.faqService.updateFAQ(id, updateFAQDto);
  }

  @Delete(':id')
  removeFAQ(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.removeFAQ(id);
  }

  @Delete()
  removeAllFAQ(): Promise<FAQ> {
    return this.faqService.removeAllFAQ();
  }
}
