import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateDiamondDto } from './dto/create-diamond.dto';
import { Diamond, DiamondDocument } from './schemas/diamond.schema';

@Injectable()
export class DiamondsService {
  constructor(
    @InjectModel(Diamond.name)
    private diamondModel: Model<DiamondDocument>,
  ) {}

  async create(createDiamondDto: CreateDiamondDto) {
    return this.diamondModel.create(createDiamondDto);
  }

  async findAll() {
    return this.diamondModel.find();
  }

  async findOne(id: string) {
    return this.diamondModel.findById(id);
  }
}