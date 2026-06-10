import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

import {
  WorkEntry,
  WorkEntrySchema,
} from '../work-entries/schemas/work-entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WorkEntry.name,
        schema: WorkEntrySchema,
      },
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}