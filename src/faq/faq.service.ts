/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { FAQ, FAQDocument } from "./schemas/FAQ.schema";
import { Model } from "mongoose";
import { CreateFAQDto } from "./dto/create-FAQ.dto";
import { UpdateFAQDto } from "./dto/update-FAQ.dto";


@Injectable()
export class FAQService {
  private faq = [];

  constructor(@InjectModel(FAQ.name) private FAQModel: Model<FAQDocument>) {}

  async getFAQ(): Promise<FAQ[]> {
    return this.FAQModel.find().exec();
  }

  async getFAQByID(id: string): Promise<FAQ> {
    return this.FAQModel.findById(id);
  }

  async createFAQ(faqDto: CreateFAQDto) {
    const newFAQ = new this.FAQModel(faqDto);
    return newFAQ.save();
  }

  async updateFAQ(id: string, faqDto: UpdateFAQDto): Promise<FAQ> {
    return this.FAQModel.findByIdAndUpdate(id, faqDto, {new: true});
  }

  async removeFAQ(id: string): Promise<FAQ> {
    return this.FAQModel.findByIdAndRemove(id);
  }

  async removeAllFAQ(): Promise<FAQ> {
    return this.FAQModel.remove().exec();
  }

}
