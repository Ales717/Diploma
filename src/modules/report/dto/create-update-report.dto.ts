import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    date: Date;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    taskId: string;
}


export class UpdateReportDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    date?: Date;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    userId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    taskId?: string;
}