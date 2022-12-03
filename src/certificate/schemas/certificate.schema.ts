/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type CertificateDocument = Certificate & Document;

@Schema()
export class Certificate {
  @Prop()
  @ApiProperty({example: 'Вадим'})
  name: string;

  @Prop()
  @ApiProperty({example: '888005553535'})
  phone: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);