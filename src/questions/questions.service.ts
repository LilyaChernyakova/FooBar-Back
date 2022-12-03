/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Questions, QuestionsDocument } from "./schemas/questions.schema";
import { CreateQuestionsDto } from "./dto/create-questions.dto";
import { UpdateQuestionsDto } from "./dto/update-questions.dto";

export interface ReturnQuestions {
  id: string,
  name: string,
  email: string,
  message: string
}

@Injectable()
export class QuestionsService {
  private questions = [];

  constructor(@InjectModel(Questions.name) private questionsModel: Model<QuestionsDocument>) {}

  async getQuestions(): Promise<ReturnQuestions[]> {
    let resultPromise = new Promise<ReturnQuestions[]>((resolve, reject) => {
      this.questionsModel.find().exec().then((result) => {
        const newResult = [];
        for (const res of result) {
          newResult.push({
            id: res.id,
            name: res.name,
            email: res.email,
            message: res.message
          });
        }
        resolve(newResult);
      });
    });

    return resultPromise;
  }

  async getQuestionsByID(id: string): Promise<ReturnQuestions> {
    let resultPromise = new Promise<ReturnQuestions>((resolve, reject) => {
      this.questionsModel.findById(id).then((result) => {
        const newResult = {
          id: result.id,
          name: result.name,
          email: result.email,
          message: result.message
        };
        resolve(newResult);
      });
    });

    return resultPromise;
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
