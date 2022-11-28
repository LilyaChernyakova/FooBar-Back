/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Contacts, ContactsDocument } from "./schemas/contacts.schema";
import { Model } from "mongoose";
import { CreateContactsDto } from "./dto/create-contacts.dto";
import { UpdateContactsDto } from "./dto/update-contacts.dto";

export interface ReturnAddress {
  city: string;
  street: string;
  building: string;
}

export interface ReturnContacts {
  phone: string;
  address: ReturnAddress;
  email: string[];
  schedule: string;
}


@Injectable()
export class ContactsService {
  private contacts = [];

  constructor(@InjectModel(Contacts.name) private contactsModel: Model<ContactsDocument>) {}

  async getContacts(): Promise<ReturnContacts[]> {
    let resultPromise = new Promise<ReturnContacts[]>((resolve, reject) => {
      this.contactsModel.find().exec().then((result) => {
        const newResult = { ...result }
        resolve(newResult);
      });
    })

  return resultPromise;
  }

  async getContactsByID(id: string): Promise<Contacts> {
    return this.contactsModel.findById(id);
  }

  async createContacts(contactsDto: CreateContactsDto) {
    const newContacts = new this.contactsModel(contactsDto);
    return newContacts.save();
  }

  // как без знания айди обновить контакт?
  async updateContacts(id: string, contactsDto: UpdateContactsDto): Promise<Contacts> {
    return this.contactsModel.findByIdAndUpdate(id, contactsDto, {new: true});
  }

  async removeContacts(id: string): Promise<Contacts> {
    return this.contactsModel.findByIdAndRemove(id);
  }

  async removeAllContacts(): Promise<Contacts> {
    return this.contactsModel.remove().exec();
  }

}