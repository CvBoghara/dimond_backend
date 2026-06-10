import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { WorkEntriesService } from './work-entries.service';
import { CreateWorkEntryDto } from './dto/create-work-entry.dto';

@Controller('work-entries')
export class WorkEntriesController {
  constructor(
    private readonly workEntriesService: WorkEntriesService,
  ) {}

  @Post()
  create(@Body() createWorkEntryDto: CreateWorkEntryDto) {
    return this.workEntriesService.create(createWorkEntryDto);
  }

  @Get()
  findAll() {
    return this.workEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workEntriesService.findOne(id);
  }
}