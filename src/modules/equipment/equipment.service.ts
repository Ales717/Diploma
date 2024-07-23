import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEquipmentDto, UpdateEquipmentDto } from './dto/create-update-equipment.dto';

@Injectable()
export class EquipmentService {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateEquipmentDto) {
        return this.prisma.equipment.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.equipment.findMany();
    }

    async findOne(id: string) {
        return this.prisma.equipment.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateEquipmentDto) {
        return this.prisma.equipment.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.equipment.delete({
            where: { id },
        });
    }

    async toggleAvailability(id: string) {
        const equipment = await this.prisma.equipment.findUnique({
            where: { id },
        });

        if (!equipment) {
            throw new Error('Equipment not found');
        }

        return this.prisma.equipment.update({
            where: { id },
            data: {
                availability: !equipment.availability,
            },
        });
    }

    async findAvailable() {
        return this.prisma.equipment.findMany({
            where: { availability: true },
        });
    }
}
