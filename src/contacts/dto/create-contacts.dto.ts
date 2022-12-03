/*eslint-disable*/
import { Address } from "../schemas/contacts.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreateContactsDto {
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly address: Address;
  @ApiProperty()
  readonly email: string[];
  @ApiProperty()
  readonly schedule: string;
}