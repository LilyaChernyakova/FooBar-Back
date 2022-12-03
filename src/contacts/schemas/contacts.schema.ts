/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type ContactsDocument = Contacts & Document;

@Schema()
export class Address {
  @Prop()
  @ApiProperty()
  city: string;

  @Prop()
  @ApiProperty()
  street: string;

  @Prop()
  @ApiProperty()
  building: string;
}

@Schema()
export class Contacts {
  @Prop()
  @ApiProperty()
  phone: string;

  @Prop()
  @ApiProperty()
  address: Address;

  @Prop()
  @ApiProperty()
  email: string[];

  @Prop()
  @ApiProperty()
  schedule: string;
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);