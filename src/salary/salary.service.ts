import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  WorkEntry,
  WorkEntryDocument,
} from '../work-entries/schemas/work-entry.schema';

import {
  Employee,
  EmployeeDocument,
} from '../employees/schemas/employee.schema';

@Injectable()
export class SalaryService {
  constructor(
    @InjectModel(WorkEntry.name)
    private workEntryModel: Model<WorkEntryDocument>,

    @InjectModel(Employee.name)
    private employeeModel: Model<EmployeeDocument>,
  ) {}

  calculateSalaryAmount(
    quantity: number,
    ratePerPiece: number,
  ): number {
    return quantity * ratePerPiece;
  }

  async calculateSalary(employeeId: string) {
    const entries = await this.workEntryModel.find({
      employeeId,
    });

    const employee =
      await this.employeeModel.findById(employeeId);

    const totalSalary = entries.reduce(
      (sum, entry) =>
        sum +
        this.calculateSalaryAmount(
          entry.quantity,
          entry.ratePerPiece,
        ),
      0,
    );

    return {
      employeeId,
      employeeName: employee?.name,
      totalEntries: entries.length,
      totalSalary,
    };
  }
}