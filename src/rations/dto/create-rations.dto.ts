/*eslint-disable*/
import {ApiProperty} from "@nestjs/swagger";

// !!! Добавить ApiProperty
export class CreateRationsDto {
    @ApiProperty({example: 'Название блюда'})
    readonly title;
    @ApiProperty({example: 'Пример описания блюда'})
    readonly description;
    @ApiProperty({example: 1337})
    readonly calories;
    @ApiProperty({example: 1337, description: 'cost for 1 day'})
    readonly price;
}