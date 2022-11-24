/*eslint-disable*/
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { Questions, QuestionsSchema } from "./schemas/questions.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  providers: [QuestionsService],
  controllers: [QuestionsController],
  imports: [MongooseModule.forFeature([{ name: Questions.name, schema: QuestionsSchema }])]
})

export class QuestionsModule {}
