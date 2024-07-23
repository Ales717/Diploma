import { IsNotEmpty, IsString, IsDateString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsDateString()
    startDate: string;

    @ApiProperty({ required: false })
    @IsBoolean()
    done?: boolean = false;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    serviceId: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    orderId: string;
}

export class UpdateTaskDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    done?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    serviceId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    orderId?: string;
}
