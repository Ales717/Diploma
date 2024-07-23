import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReportDto, UpdateReportDto } from './dto/create-update-report.dto';

@Injectable()
export class ReportService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateReportDto) {
        return this.prisma.report.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.report.findMany();
    }

    async findOne(id: string) {
        return this.prisma.report.findUnique({
            where: { id },
        });
    }

    async findByUserId(userId: string) {
        return this.prisma.report.findMany({
            where: { userId },
        });
    }

    async findByTaskId(taskId: string) {
        return this.prisma.report.findMany({
            where: { taskId },
        });
    }

    async update(id: string, data: UpdateReportDto) {
        return this.prisma.report.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.report.delete({
            where: { id },
        });
    }
}
