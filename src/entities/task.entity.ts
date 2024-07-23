import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
    @ApiProperty()
    id: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    done: boolean;

    @ApiProperty()
    serviceId: string;

    @ApiProperty()
    orderId: string;

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
