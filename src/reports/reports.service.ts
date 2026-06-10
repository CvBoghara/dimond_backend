import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel('WorkEntry')
    private workEntryModel: Model<any>,
  ) {}

  async employeeReport(employeeId: string) {
    const entries = await this.workEntryModel
      .find({ employeeId })
      .populate('diamondId');

    const totalPieces = entries.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );

    const totalSalary = entries.reduce(
      (sum, item) =>
        sum + item.quantity * item.ratePerPiece,
      0,
    );

    return {
      employeeId,
      totalEntries: entries.length,
      totalPieces,
      totalSalary,
      entries,
    };
  }

  async dailyReport() {
    return this.workEntryModel.find();
  }

  async monthlyReport() {
    return this.workEntryModel.find();
  }
}