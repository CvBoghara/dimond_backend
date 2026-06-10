import {
  IsDateString,
  IsMongoId,
  IsNumber,
} from 'class-validator';

export class CreateWorkEntryDto {
  @IsMongoId()
  employeeId!: string;

  @IsMongoId()
  diamondId!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  ratePerPiece!: number;

  @IsDateString()
  date!: Date;
}