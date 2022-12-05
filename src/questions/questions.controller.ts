/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Questions } from "./schemas/questions.schema";
import { CreateQuestionsDto } from "./dto/create-questions.dto";
import { UpdateQuestionsDto } from "./dto/update-questions.dto";
import { QuestionsService } from "./questions.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {
  }

  @Get()
  @ApiOperation({ summary: "Get all questions" })
  @ApiResponse({status: 200, description: 'SUCCESS: All questions received', type: [Questions]})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getAllQuestions(): Promise<Questions[]> {
    return this.questionsService.getQuestions();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get question by id" })
  @ApiResponse({status: 200, description: 'SUCCESS: Get question by id', type: Questions})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getQuestionsByID(@Param('id') id: string): Promise<Questions> {
    return this.questionsService.getQuestionsByID(id);
  }

  @Post()
  @ApiOperation({ summary: "Create question" })
  @ApiResponse({status: 201, description: 'SUCCESS: New question created', type: Questions})
  @ApiBody({type: CreateQuestionsDto})
  createQuestions(@Body() createQuestionsDto: CreateQuestionsDto): Promise<Questions> {
    return this.questionsService.createQuestions(createQuestionsDto);
  }

  @Put(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Question updated', type: Questions})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Update question with given id" })
  @ApiBody({type: UpdateQuestionsDto})
  updateQuestions(
    @Body() updateQuestionsDto: UpdateQuestionsDto,
    @Param('id') id: string): Promise<Questions> {
    return this.questionsService.updateQuestions(id, updateQuestionsDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Question deleted by id', type: Questions})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Delete question by id" })
  removeQuestions(@Param('id') id: string): Promise<Questions> {
    return this.questionsService.removeQuestions(id);
  }

  @Delete()
  @ApiResponse({status: 200, description: 'SUCCESS: All questions deleted'})
  @ApiOperation({ summary: "Delete all questions" })
  removeAllQuestions(): Promise<Questions> {
    return this.questionsService.removeAllQuestions();
  }
  
}
