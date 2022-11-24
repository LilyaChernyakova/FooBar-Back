/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type QuestionsDocument = Questions & Document;

@Schema()
export class Questions{
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  message: string;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
