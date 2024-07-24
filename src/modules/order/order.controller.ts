import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto, UpdateOrderDto } from './dto/create-update-order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    create(@Body() data: CreateOrderDto) {
        if (!data.date) {
            data.date = new Date().toISOString();
        }
        return this.orderService.create(data);
    }

    @Get()
    findAll() {
        return this.orderService.findAll();
    }

    @Get('active')
    findAvailable() {
        return this.orderService.findActive();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateOrderDto) {
        return this.orderService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.remove(id);
    }

    @Patch(':id/toggle-status')
    toggleStatus(@Param('id') id: string) {
        return this.orderService.toggleStatus(id);
    }
}
