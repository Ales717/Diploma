import { ApiProperty } from '@nestjs/swagger';
import { Equipment } from '@prisma/client';

export class EquipmentEntity implements Equipment {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    availability: boolean;

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
