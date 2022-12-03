/*eslint-disable*/
import { ApiProperty } from "@nestjs/swagger";

export class CreateCertificateDto {
  @ApiProperty({example: 'Вадим'})
  readonly name: string;
  @ApiProperty({example: '888005553535'})
  readonly phone: string;
}