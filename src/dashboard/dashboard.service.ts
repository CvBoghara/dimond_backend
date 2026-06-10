import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from '../employees/schemas/employee.schema';
import { Diamond, DiamondDocument } from '../diamonds/schemas/diamond.schema';
import { WorkEntry, WorkEntryDocument } from '../work-entries/schemas/work-entry.schema';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    @InjectModel(Diamond.name) private diamondModel: Model<DiamondDocument>,
    @InjectModel(WorkEntry.name) private workEntryModel: Model<WorkEntryDocument>,
  ) {}

  async getStats() {
    const totalEmployees = await this.employeeModel.countDocuments();
    const totalDiamonds = await this.diamondModel.countDocuments();
    const totalWorkEntries = await this.workEntryModel.countDocuments();

    const entries = await this.workEntryModel.find();

    const totalSalary = entries.reduce(
      (sum, entry) => sum + entry.totalSalary,
      0,
    );

    return {
      totalEmployees,
      totalDiamonds,
      totalWorkEntries,
      totalSalary,
    };
  }
}