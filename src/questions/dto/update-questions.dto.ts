/*eslint-disable*/
import {ApiProperty} from "@nestjs/swagger";

export class UpdateQuestionsDto {
  @ApiProperty({example: 'Lilya'})
  readonly name: string;

  @ApiProperty({example : 'lilechka@mail.ru'})
  readonly email: string;

  @ApiProperty({example: 'WHERE IS MY MONEY?'})
  readonly message: string;
}