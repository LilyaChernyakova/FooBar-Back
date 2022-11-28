/*eslint-disable*/
import { Module } from '@nestjs/common';
import { RationsService } from './rations.service';
import { RationsController } from './rations.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Rations, RationsSchema} from "./schemas/rations.schema";


@Module({
  providers: [RationsService],
  controllers: [RationsController],
  imports: [MongooseModule.forFeature([{ name: Rations.name, schema: RationsSchema }])]
})
export class RationsModule {}
