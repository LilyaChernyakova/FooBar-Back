/*eslint-disable*/
import {ApiOperation, ApiProperty} from "@nestjs/swagger";

// !!! Добавить ApiProperty
export class CreateRationsDto {
    @ApiProperty()
    readonly title;
    @ApiProperty()
    readonly description;
    @ApiProperty()
    readonly calories;
    @ApiProperty({description: "cost for 1 day"})
    readonly price;
}
