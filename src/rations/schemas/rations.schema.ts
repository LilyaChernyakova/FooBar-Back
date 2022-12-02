/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

export type RationsDocument = Rations & Document;

@Schema()
// !!! Добавить ApiProperty вместо Prop
export class Rations{
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    calories: number

    @ApiProperty()
    price: number;
}

export const RationsSchema = SchemaFactory.createForClass(Rations);
