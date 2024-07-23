import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto, UpdateReportDto } from './dto/create-update-report.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('report')
@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @Post()
    create(@Body() data: CreateReportDto) {
        return this.reportService.create(data);
    }

    @Get()
    findAll() {
        return this.reportService.findAll();
    }

    @Get('user/:userId')
    findByUserId(@Param('userId') userId: string) {
        return this.reportService.findByUserId(userId);
    }

    @Get('task/:taskId')
    findByTaskId(@Param('taskId') taskId: string) {
        return this.reportService.findByTaskId(taskId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.reportService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateReportDto) {
        return this.reportService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.reportService.remove(id);
    }
}
