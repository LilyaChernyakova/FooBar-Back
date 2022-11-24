/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { Contacts } from "./schemas/contacts.schema";
import { CreateContactsDto } from "./dto/create-contacts.dto";
import { UpdateContactsDto } from "./dto/update-contacts.dto";
import { Questions } from "../questions/schemas/questions.schema";

@Controller('contacts')
export class ContactsController {

  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getAllContacts(): Promise<any> {
    return this.contactsService.getContacts();
  }

  @Get(':id')
  getContactsByID(@Param('id') id: string): Promise<Contacts> {
    return this.contactsService.getContactsByID(id);
  }

  @Post()
  createContacts(@Body() createContactsDto: CreateContactsDto): Promise<Contacts> {
    return this.contactsService.createContacts(createContactsDto);
  }

  @Put(':id')
  updateContacts(
    @Body() updateContactsDto: UpdateContactsDto,
    @Param('id') id: string): Promise<Contacts> {
    return this.contactsService.updateContacts(id, updateContactsDto);
  }

  @Delete(':id')
  removeContacts(@Param('id') id: string): Promise<Contacts> {
    return this.contactsService.removeContacts(id);
  }

  @Delete()
  removeAllContacts(): Promise<Contacts> {
    return this.contactsService.removeAllContacts();
  }

  /*@Get()
  getPhone(): Promise<string> {
    return this.contactsService.getPhone();
  }

  // Нужно ли для каждого параметра адреса отдельный get?
  @Get()
  getAddress(): Promise<Address> {
    return this.contactsService.getAddress();
  }

  @Get()
  getEmail(): Promise<string[]> {
    return this.contactsService.getEmail();
  }

  @Get()
  getSchedule(): Promise<string> {
    return this.contactsService.getSchedule();
  }*/
}
