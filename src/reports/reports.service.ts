import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkEntry, WorkEntryDocument } from '../work-entries/schemas/work-entry.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(WorkEntry.name)
    private workEntryModel: Model<WorkEntryDocument>,
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
      (sum, item) => sum + item.totalSalary,
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
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    return this.workEntryModel.find({
      date: { $gte: startOfDay, $lte: endOfDay }
    }).populate('employeeId diamondId');
  }

  async monthlyReport() {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    
    return this.workEntryModel.find({
      date: { $gte: startOfMonth, $lt: endOfMonth }
    }).populate('employeeId diamondId');
  }
}