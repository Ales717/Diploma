import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto, UpdateServiceDto } from './dto/create-update-service.dto';

@Injectable()
export class ServiceService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateServiceDto) {
        return this.prisma.service.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.service.findMany();
    }

    async findOne(id: string) {
        return this.prisma.service.findUnique({
            where: { id },
        });
    }

    async findCompetences(id: string) {
        const service = await this.prisma.service.findUnique({
            where: { id },
            select: { necessaryCompetences: true },
        });
        return service.necessaryCompetences;
    }

    async findEquipment(id: string) {
        const service = await this.prisma.service.findUnique({
            where: { id },
            select: { requiredEquipment: true },
        });
        return service.requiredEquipment;
    }

    async update(id: string, data: UpdateServiceDto) {
        return this.prisma.service.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.service.delete({
            where: { id },
        });
    }
}
