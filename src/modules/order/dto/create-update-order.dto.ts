import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    costumer: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    contact: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsDateString()
    date: string;
}

export class UpdateOrderDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    costumer?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    contact?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    date?: string;
}