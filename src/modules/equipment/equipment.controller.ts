import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto, UpdateEquipmentDto } from './dto/create-update-equipment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) { }

    @Post()
    create(@Body() data: CreateEquipmentDto) {
        return this.equipmentService.create(data);
    }

    @Get()
    findAll() {
        return this.equipmentService.findAll();
    }

    @Get('available')
    findAvailable() {
        return this.equipmentService.findAvailable();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.equipmentService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateEquipmentDto) {
        return this.equipmentService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.equipmentService.remove(id);
    }

    @Patch(':id/toggle-availability')
    toggleAvailability(@Param('id') id: string) {
        return this.equipmentService.toggleAvailability(id);
    }
}
