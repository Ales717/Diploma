import { ApiProperty } from '@nestjs/swagger';
import { Allocation } from '@prisma/client';

export class AllocationEntity implements Allocation {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    equipmentId: string;

    @ApiProperty()
    taskId: string;

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
