/*eslint-disable*/
import { Parts } from "../schemas/FAQ.schema";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateFAQDto {
  @ApiProperty()
  readonly data: Parts[];
}

