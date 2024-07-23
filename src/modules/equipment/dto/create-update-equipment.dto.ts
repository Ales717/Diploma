import { IsNotEmpty, IsBoolean, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEquipmentDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    availability?: boolean = true;
}

export class UpdateEquipmentDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    availability?;
}