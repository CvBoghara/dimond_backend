import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
  ) {}

  @Get('employee/:employeeId')
  employeeReport(
    @Param('employeeId')
    employeeId: string,
  ) {
    return this.reportsService.employeeReport(
      employeeId,
    );
  }

  @Get('daily')
  dailyReport() {
    return this.reportsService.dailyReport();
  }

  @Get('monthly')
  monthlyReport() {
    return this.reportsService.monthlyReport();
  }
}