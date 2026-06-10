import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateDiamondDto {
  @IsString()
  @IsNotEmpty()
  diamondCode!: string;

  @IsNumber()
  caratWeight!: number;

  @IsString()
  @IsNotEmpty()
  status!: string;
}