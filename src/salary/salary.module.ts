import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

import {
  WorkEntry,
  WorkEntrySchema,
} from '../work-entries/schemas/work-entry.schema';

import {
  Employee,
  EmployeeSchema,
} from '../employees/schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WorkEntry.name,
        schema: WorkEntrySchema,
      },
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
  controllers: [SalaryController],
  providers: [SalaryService],
})
export class SalaryModule {}