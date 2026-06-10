import { Controller, Get, Param } from '@nestjs/common';
import { SalaryService } from './salary.service';

@Controller('salary')
export class SalaryController {
  constructor(
    private readonly salaryService: SalaryService,
  ) {}

  @Get(':employeeId')
  calculateSalary(
    @Param('employeeId') employeeId: string,
  ) {
    return this.salaryService.calculateSalary(
      employeeId,
    );
  }
}