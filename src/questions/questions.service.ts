/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Questions, QuestionsDocument } from "./schemas/questions.schema";
import { CreateQuestionsDto } from "./dto/create-questions.dto";
import { UpdateQuestionsDto } from "./dto/update-questions.dto";

@Injectable()
export class QuestionsService {
  private questions = [];

  constructor(@InjectModel(Questions.name) private questionsModel: Model<QuestionsDocument>) {}

  async getQuestions(): Promise<Questions[]> {
    return this.questionsModel.find().exec();
  }

  async getQuestionsByID(id: string): Promise<Questions> {
    return this.questionsModel.findById(id);
  }

  async createQuestions(questionsDto: CreateQuestionsDto) {
    const newQuestions = new this.questionsModel(questionsDto);
    return newQuestions.save();
  }

  async updateQuestions(id: string, questionsDto: UpdateQuestionsDto): Promise<Questions> {
    return this.questionsModel.findByIdAndUpdate(id, questionsDto, {new: true});
  }

  async removeQuestions(id: string): Promise<Questions> {
    return this.questionsModel.findByIdAndRemove(id);
  }

  async removeAllQuestions(): Promise<Questions> {
    return this.questionsModel.remove().exec();
  }

}
