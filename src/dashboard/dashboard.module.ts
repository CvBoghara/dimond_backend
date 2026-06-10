import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

import {
  Employee,
  EmployeeSchema,
} from '../employees/schemas/employee.schema';

import {
  Diamond,
  DiamondSchema,
} from '../diamonds/schemas/diamond.schema';

import {
  WorkEntry,
  WorkEntrySchema,
} from '../work-entries/schemas/work-entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Diamond.name, schema: DiamondSchema },
      { name: WorkEntry.name, schema: WorkEntrySchema },
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}