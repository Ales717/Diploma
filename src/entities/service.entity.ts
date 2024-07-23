import { ApiProperty } from '@nestjs/swagger';
import { Service } from '@prisma/client';

export class ServiceEntity implements Service {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    requiredEquipment: object;

    @ApiProperty()
    necessaryCompetences: object;

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
