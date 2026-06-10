import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorkEntriesController } from './work-entries.controller';
import { WorkEntriesService } from './work-entries.service';

import {
  WorkEntry,
  WorkEntrySchema,
} from './schemas/work-entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WorkEntry.name,
        schema: WorkEntrySchema,
      },
    ]),
  ],
  controllers: [WorkEntriesController],
  providers: [WorkEntriesService],
})
export class WorkEntriesModule {}