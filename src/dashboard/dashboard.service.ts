import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<any>,
    @InjectModel('Diamond') private diamondModel: Model<any>,
    @InjectModel('WorkEntry') private workEntryModel: Model<any>,
  ) {}

  async getStats() {
    const totalEmployees = await this.employeeModel.countDocuments();
    const totalDiamonds = await this.diamondModel.countDocuments();
    const totalWorkEntries = await this.workEntryModel.countDocuments();

    const entries = await this.workEntryModel.find();

    const totalSalary = entries.reduce(
      (sum, entry) => sum + entry.quantity * entry.ratePerPiece,
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