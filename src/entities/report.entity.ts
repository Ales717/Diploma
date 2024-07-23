import { ApiProperty } from '@nestjs/swagger';
import { Report } from '@prisma/client';

export class ReportEntity implements Report {
    @ApiProperty()
    id: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    taskId: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
