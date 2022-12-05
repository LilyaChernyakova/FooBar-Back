/*eslint-disable*/
import { Parts } from "../schemas/FAQ.schema";
import {ApiProperty} from "@nestjs/swagger";

export class CreateFAQDto {
  @ApiProperty()
  readonly data: Parts[];
}

