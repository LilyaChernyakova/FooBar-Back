/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Questions } from "./schemas/questions.schema";
import { CreateQuestionsDto } from "./dto/create-questions.dto";
import { UpdateQuestionsDto } from "./dto/update-questions.dto";
import { QuestionsService } from "./questions.service";

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {
  }

  @Get()
  getAllQuestions(): Promise<Questions[]> {
    return this.questionsService.getQuestions();
  }

  @Get(':id')
  getQuestionsByID(@Param('id') id: string): Promise<Questions> {
    return this.questionsService.getQuestionsByID(id);
  }

  @Post()
  createQuestions(@Body() createQuestionsDto: CreateQuestionsDto): Promise<Questions> {
    return this.questionsService.createQuestions(createQuestionsDto);
  }

  @Put(':id')
  updateQuestions(
    @Body() updateQuestionsDto: UpdateQuestionsDto,
    @Param('id') id: string): Promise<Questions> {
    return this.questionsService.updateQuestions(id, updateQuestionsDto);
  }

  @Delete(':id')
  removeQuestions(@Param('id') id: string): Promise<Questions> {
    return this.questionsService.removeQuestions(id);
  }

  @Delete()
  removeAllQuestions(): Promise<Questions> {
    return this.questionsService.removeAllQuestions();
  }
  
}
