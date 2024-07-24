import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';

export class OrderEntity implements Order {
    @ApiProperty()
    id: string;

    @ApiProperty()
    costumer: string;

    @ApiProperty()
    contact: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    done: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
