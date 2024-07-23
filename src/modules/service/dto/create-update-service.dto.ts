import { IsNotEmpty, IsString, IsJSON, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsObject()
    requiredEquipment: object;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsObject()
    necessaryCompetences: object;
}

export class UpdateServiceDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsObject()
    requiredEquipment?: object;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsObject()
    necessaryCompetences?: object;
}