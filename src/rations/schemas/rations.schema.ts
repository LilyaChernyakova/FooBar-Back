/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

export type RationsDocument = Rations & Document;

@Schema()
// !!! Добавить ApiProperty вместо Prop
export class Rations{
    @Prop()
    @ApiProperty({example: 'Название блюда'})
    title: string;

    @Prop()
    @ApiProperty({example: 'Пример описания блюда'})
    description: string;

    @Prop()
    @ApiProperty({example: 1337})
    calories: number

    @Prop()
    @ApiProperty({example: 1337})
    price: number;
}

export const RationsSchema = SchemaFactory.createForClass(Rations);
