import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  WorkEntry,
  WorkEntryDocument,
} from '../work-entries/schemas/work-entry.schema';

@Injectable()
export class SalaryService {
  constructor(
    @InjectModel(WorkEntry.name)
    private workEntryModel: Model<WorkEntryDocument>,
  ) {}

  async calculateSalary(employeeId: string) {
    const entries = await this.workEntryModel.find({
      employeeId,
    });

    const totalSalary = entries.reduce(
      (sum, entry) =>
        sum + entry.quantity * entry.ratePerPiece,
      0,
    );

    return {
      employeeId,
      totalEntries: entries.length,
      totalSalary,
    };
  }
}