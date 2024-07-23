import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-update-task.dto';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateTaskDto) {
        return this.prisma.task.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.task.findMany();
    }

    async findOne(id: string) {
        return this.prisma.task.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.task.delete({
            where: { id },
        });
    }
}
