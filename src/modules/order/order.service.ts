import { Injectable } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './dto/create-update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateOrderDto) {
        return this.prisma.order.create({
            data,
        });
    }

    async findAll() {
        return this.prisma.order.findMany();
    }

    async findOne(id: string) {
        return this.prisma.order.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: UpdateOrderDto) {
        return this.prisma.order.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.order.delete({
            where: { id },
        });
    }
}
