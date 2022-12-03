/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import {InjectModel, Prop} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Rations, RationsDocument} from "./schemas/rations.schema";
import {CreateRationsDto} from "./dto/create-rations.dto";
import {UpdateRationsDto} from "./dto/update-rations.dto";

export interface ReturnRations {
    id: string,
    title: string,
    description: string,
    calories: number,
    price: number
}

// !!! отредактировать delete
@Injectable()
export class RationsService {
    private rations = [];

    constructor(@InjectModel(Rations.name) private rationsModel: Model<RationsDocument>) {}

    async getRations(): Promise<ReturnRations[]> {
        let resultPromise = new Promise<ReturnRations[]>((resolve, reject) => {
            this.rationsModel.find().exec().then((result) => {
                const newResult = [];
                for (const res of result) {
                    newResult.push({
                        id: res.id,
                        title: res.title,
                        description: res.description,
                        calories: res.calories,
                        price: res.price
                    });
                }
                resolve(newResult);
            });
        });

        return resultPromise;
    }

    async getRationsByID(id: string): Promise<ReturnRations> {
        let resultPromise = new Promise<ReturnRations>((resolve, reject) => {
            this.rationsModel.findById(id).then((result) => {
                const newResult = {
                    id: result.id,
                    title: result.title,
                    description: result.description,
                    calories: result.calories,
                    price: result.price
                }
                resolve(newResult);
            });
        });

        return resultPromise;
    }

    async createRations(rationsDto: CreateRationsDto) {
        const newRations = new this.rationsModel(rationsDto);
        return newRations.save();
    }

    async updateRations(id: string, rationsDto: UpdateRationsDto): Promise<Rations> {
        return this.rationsModel.findByIdAndUpdate(id, rationsDto, {new: true});
    }

    async removeRations(id: string): Promise<Rations> {
        return this.rationsModel.findByIdAndRemove(id);
    }

    async removeAllRations() {
        return this.rationsModel.remove().exec();
    }
}
