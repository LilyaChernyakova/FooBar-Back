/*eslint-disable*/
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {RationsService} from "./rations.service";
import {Rations} from "./schemas/rations.schema";
import {CreateRationsDto} from "./dto/create-rations.dto";
import {UpdateRationsDto} from "./dto/update-rations.dto";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

// !!! добавление ApiTags
// !!! добавление ApiBoby
// !!! добавление ApiResponse
// !!! отредактировать delete
@ApiTags('Rations')
@Controller('rations')
export class RationsController {
    constructor(private readonly rationsService: RationsService) {
    }

    @Get()
    // !!! добавление комментариев к каждому запросу
    @ApiOperation({ summary: "Get all available rations" })
    @ApiResponse({status: 200, description: 'SUCCESS: All rations received', type: [Rations]})
    @ApiResponse({status: 404, description: 'ERROR: Not Found'})
    getAllRations(): Promise<Rations[]> {
        return this.rationsService.getRations();
    }


    @Get(':id')
    @ApiResponse({status: 200, description: 'SUCCESS: Ration received by id', type: Rations})
    @ApiResponse({status: 404, description: 'ERROR: Not Found'})
    @ApiOperation({ summary: "Get ration by id" })
    getRationsByID(@Param('id') id: string): Promise<Rations> {
        return this.rationsService.getRationsByID(id);
    }

    @Post()
    @ApiResponse({status: 201, description: 'SUCCESS: New ration created', type: Rations})
    @ApiOperation({ summary: "Create ration" })
    @ApiBody({type: CreateRationsDto})
    createRations(@Body() createRationsDto: CreateRationsDto): Promise<Rations> {
        return this.rationsService.createRations(createRationsDto);
    }

    @Put(':id')
    @ApiResponse({status: 200, description: 'SUCCESS: Ration updated', type: Rations})
    @ApiResponse({status: 404, description: 'ERROR: Not Found'})
    @ApiOperation({ summary: "Update ration with given id" })
    @ApiBody({type: UpdateRationsDto})
    updateRations(
        @Body() updateRationsDto: UpdateRationsDto,
        @Param('id') id: string): Promise<Rations> {
        return this.rationsService.updateRations(id, updateRationsDto);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'SUCCESS: Ration deleted by id', type: Rations})
    @ApiResponse({status: 404, description: 'ERROR: Not Found'})
    @ApiOperation({ summary: "Delete ration by id" })
    removeRations(@Param('id') id: string): Promise<Rations> {
        return this.rationsService.removeRations(id);
    }

    @Delete()
    @ApiResponse({status: 200, description: 'SUCCESS: All rations deleted'})
    @ApiOperation({ summary: "Delete all available rations" })
    removeAllRations() {
        return this.rationsService.removeAllRations();
    }
}
