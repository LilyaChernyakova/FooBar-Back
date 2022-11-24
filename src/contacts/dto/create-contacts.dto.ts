/*eslint-disable*/
import { Address } from "../schemas/contacts.schema";

export class CreateContactsDto {
  readonly phone: string;
  readonly address: Address;
  readonly email: string[];
  readonly schedule: string;
}