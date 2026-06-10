import {
  IsDateString,
  IsMongoId,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateWorkEntryDto {
  @IsMongoId()
  employeeId!: string;

  @IsMongoId()
  diamondId!: string;

  @IsString()
  workType!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  ratePerPiece!: number;

  @IsDateString()
  date!: Date;
}