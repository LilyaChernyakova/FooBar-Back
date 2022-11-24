/*eslint-disable*/
import { Module } from '@nestjs/common';
import { FAQService } from './faq.service';
import { FAQController } from './faq.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { FAQ, FAQSchema } from "./schemas/FAQ.schema";

@Module({
  providers: [FAQService],
  controllers: [FAQController],
  imports: [MongooseModule.forFeature([{ name: FAQ.name, schema: FAQSchema }])]
})
export class FAQModule {}
