/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

export type FAQDocument = FAQ & Document;

@Schema()
export class QA {
  @ApiProperty()
  @Prop()
  question: string;

  @ApiProperty()
  @Prop()
  answer: string;
}

@Schema()
export class Parts {
  @ApiProperty({example : 'Products and Menu/Payment and Delivery/Keeping'})
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  qa: QA[];
}

@Schema()
export class FAQ {
  @ApiProperty()
  @Prop()
  data: Parts[];
}

export const FAQSchema = SchemaFactory.createForClass(FAQ);