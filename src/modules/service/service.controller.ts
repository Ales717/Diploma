import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto, UpdateServiceDto } from './dto/create-update-service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('service')
@Controller('service')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) { }

    @Post()
    create(@Body() data: CreateServiceDto) {
        return this.serviceService.create(data);
    }

    @Get()
    findAll() {
        return this.serviceService.findAll();
    }

    @Get(':id/competences')
    findCompetences(@Param('id') id: string) {
        return this.serviceService.findCompetences(id);
    }

    @Get(':id/equipment')
    findEquipment(@Param('id') id: string) {
        return this.serviceService.findEquipment(id);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.serviceService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateServiceDto) {
        return this.serviceService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.serviceService.remove(id);
    }
}
