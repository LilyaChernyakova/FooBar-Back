/*eslint-disable*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RationsDocument = Rations & Document;

@Schema()
export class Rations{
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    calories: number

    @Prop()
    price: number;
}

export const RationsSchema = SchemaFactory.createForClass(Rations);
