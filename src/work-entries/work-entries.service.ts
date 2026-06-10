import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateWorkEntryDto } from './dto/create-work-entry.dto';
import {
  WorkEntry,
  WorkEntryDocument,
} from './schemas/work-entry.schema';

@Injectable()
export class WorkEntriesService {
  constructor(
    @InjectModel(WorkEntry.name)
    private workEntryModel: Model<WorkEntryDocument>,
  ) {}

  async create(createWorkEntryDto: CreateWorkEntryDto) {
    return this.workEntryModel.create(createWorkEntryDto);
  }

  async findAll() {
    return this.workEntryModel
      .find()
      .populate('employeeId')
      .populate('diamondId');
  }

  async findOne(id: string) {
    return this.workEntryModel
      .findById(id)
      .populate('employeeId')
      .populate('diamondId');
  }
}