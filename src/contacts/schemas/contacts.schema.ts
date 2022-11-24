/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ContactsDocument = Contacts & Document;

@Schema()
export class Address {
  @Prop()
  city: string;

  @Prop()
  street: string;

  @Prop()
  building: string;
}

@Schema()
export class Contacts {
  @Prop()
  id: number;

  @Prop()
  phone: string;

  @Prop()
  address: Address;

  @Prop()
  email: string[];

  @Prop()
  schedule: string;
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);