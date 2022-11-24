/*eslint-disable*/
import { Address } from "../schemas/contacts.schema";

export class UpdateContactsDto {
  readonly phone: string;
  readonly address: Address;
  readonly email: string[];
  readonly schedule: string;
}