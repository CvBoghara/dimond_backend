import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { DiamondsService } from './diamonds.service';
import { CreateDiamondDto } from './dto/create-diamond.dto';

@Controller('diamonds')
export class DiamondsController {
  constructor(
    private readonly diamondsService: DiamondsService,
  ) {}

  @Post()
  create(@Body() createDiamondDto: CreateDiamondDto) {
    return this.diamondsService.create(createDiamondDto);
  }

  @Get()
  findAll() {
    return this.diamondsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diamondsService.findOne(id);
  }
}