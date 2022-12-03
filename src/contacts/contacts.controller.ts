/*eslint-disable*/
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { Contacts } from "./schemas/contacts.schema";
import { CreateContactsDto } from "./dto/create-contacts.dto";
import { UpdateContactsDto } from "./dto/update-contacts.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiOperation({ summary: "Get all contacts" })
  @ApiResponse({status: 200, description: 'SUCCESS: All contacts received', type: [Contacts]})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  getAllContacts(): Promise<Contacts[]> {
    return this.contactsService.getContacts();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Contact received by id', type: Contacts})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Get contact by id" })
  getContactsByID(@Param('id') id: string): Promise<Contacts> {
    return this.contactsService.getContactsByID(id);
  }

  @Post()
  @ApiResponse({status: 201, description: 'SUCCESS: New contact created', type: Contacts})
  @ApiOperation({ summary: "Create contact" })
  @ApiBody({type: CreateContactsDto})
  createContacts(@Body() createContactsDto: CreateContactsDto): Promise<Contacts> {
    return this.contactsService.createContacts(createContactsDto);
  }

  @Put(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Contact updated', type: Contacts})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Update contact with given id" })
  @ApiBody({type: UpdateContactsDto})
  updateContacts(
    @Body() updateContactsDto: UpdateContactsDto,
    @Param('id') id: string): Promise<Contacts> {
    return this.contactsService.updateContacts(id, updateContactsDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'SUCCESS: Contact deleted by id', type: Contacts})
  @ApiResponse({status: 404, description: 'ERROR: Not Found'})
  @ApiOperation({ summary: "Delete contact by id" })
  removeContacts(@Param('id') id: string): Promise<Contacts> {
    return this.contactsService.removeContacts(id);
  }

  @Delete()
  @ApiResponse({status: 200, description: 'SUCCESS: All contacts deleted'})
  @ApiOperation({ summary: "Delete all contacts" })
  removeAllContacts(): Promise<Contacts> {
    return this.contactsService.removeAllContacts();
  }
}
