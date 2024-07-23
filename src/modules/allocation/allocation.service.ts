import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAllocationDto, UpdateAllocationDto } from './dto/create-update-allocation.dto';

@Injectable()
export class AllocationService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateAllocationDto) {
        return this.prisma.allocation.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.allocation.findMany();
    }

    async findOne(id: string) {
        return this.prisma.allocation.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateAllocationDto) {
        return this.prisma.allocation.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.allocation.delete({
            where: { id },
        });
    }
}
