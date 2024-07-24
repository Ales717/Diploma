import { IsNotEmpty, IsString, IsDateString, IsOptional, IsBoolean } from 'class-validator';
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

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    done?: boolean = false;
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

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    done?: boolean = false;
}