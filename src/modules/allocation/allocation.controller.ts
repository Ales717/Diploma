import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AllocationService } from './allocation.service';
import { CreateAllocationDto, UpdateAllocationDto } from './dto/create-update-allocation.dto';

@ApiTags('allocation')
@Controller('allocation')
export class AllocationController {
    constructor(private readonly allocationService: AllocationService) { }

    @Post()
    create(@Body() data: CreateAllocationDto) {
        return this.allocationService.create(data);
    }

    @Get()
    findAll() {
        return this.allocationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.allocationService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateAllocationDto) {
        return this.allocationService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.allocationService.remove(id);
    }
}
