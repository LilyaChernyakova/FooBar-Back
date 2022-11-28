/*eslint-disable*/
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {RationsService} from "./rations.service";
import {Rations} from "./schemas/rations.schema";
import {CreateRationsDto} from "./dto/create-rations.dto";
import {UpdateRationsDto} from "./dto/update-rations.dto";

@Controller('rations')
export class RationsController {
    constructor(private readonly rationsService: RationsService) {
    }

    @Get()
    getAllRations(): Promise<Rations[]> {
        return this.rationsService.getRations();
    }

    @Get(':id')
    getRationsByID(@Param('id') id: string): Promise<Rations> {
        return this.rationsService.getRationsByID(id);
    }

    @Post()
    createRations(@Body() createRationsDto: CreateRationsDto): Promise<Rations> {
        return this.rationsService.createRations(createRationsDto);
    }

    @Put(':id')
    updateRations(
        @Body() updateRationsDto: UpdateRationsDto,
        @Param('id') id: string): Promise<Rations> {
        return this.rationsService.updateRations(id, updateRationsDto);
    }

    @Delete(':id')
    removeRations(@Param('id') id: string): Promise<Rations> {
        return this.rationsService.removeRations(id);
    }

    @Delete()
    removeAllRations(): Promise<Rations> {
        return this.rationsService.removeAllRations();
    }
}
