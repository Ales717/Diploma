import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAllocationDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    equipmentId: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    taskId: string;
}

export class UpdateAllocationDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    userId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    equipmentId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    taskId?: string;
}