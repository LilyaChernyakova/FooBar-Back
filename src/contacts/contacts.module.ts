/*eslint-disable*/
import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Contacts, ContactsSchema } from "./schemas/contacts.schema";

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [MongooseModule.forFeature([{ name: Contacts.name, schema: ContactsSchema }])]
})
export class ContactsModule {}
