/*eslint-disable*/
import {ApiProperty} from "@nestjs/swagger";

// !!! Добавить ApiProperty
export class UpdateRationsDto {
    @ApiProperty()
    readonly title;
    @ApiProperty()
    readonly description;
    @ApiProperty()
    readonly calories;
    @ApiProperty({description: "cost for 1 day"})
    readonly price;
}
