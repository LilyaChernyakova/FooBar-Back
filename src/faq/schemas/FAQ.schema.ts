/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type FAQDocument = FAQ & Document;

@Schema()
export class QA {
  @Prop()
  question: string;

  @Prop()
  answer: string;
}

@Schema()
export class Parts {
  @Prop()
  title: string;

  @Prop()
  qa: QA[];
}

@Schema()
export class FAQ {
  @Prop()
  data: Parts[];
}

export const FAQSchema = SchemaFactory.createForClass(FAQ);