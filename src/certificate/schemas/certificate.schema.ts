/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CertificateDocument = Certificate & Document;

@Schema()
export class Certificate {
  @Prop()
  name: string;

  @Prop()
  phone: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);