import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DiamondsController } from './diamonds.controller';
import { DiamondsService } from './diamonds.service';
import { Diamond, DiamondSchema } from './schemas/diamond.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Diamond.name,
        schema: DiamondSchema,
      },
    ]),
  ],
  controllers: [DiamondsController],
  providers: [DiamondsService],
})
export class DiamondsModule {}