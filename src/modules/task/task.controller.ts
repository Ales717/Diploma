import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-update-task.dto';

@ApiTags('task')
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() data: CreateTaskDto) {
        return this.taskService.create(data);
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
        return this.taskService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.taskService.remove(id);
    }
}
