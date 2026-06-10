import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorkEntryDocument = WorkEntry & Document;

@Schema({ timestamps: true })
export class WorkEntry {
  @Prop({
    type: Types.ObjectId,
    ref: 'Employee',
    required: true,
  })
  employeeId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Diamond',
    required: true,
  })
  diamondId!: Types.ObjectId;

  @Prop({
    required: true,
    enum: ['Cutting', 'Polishing', 'Grading'],
  })
  workType!: string;

  @Prop({ required: true })
  quantity!: number;

  @Prop({ required: true })
  ratePerPiece!: number;

  @Prop({ required: true })
  date!: Date;

  totalSalary!: number;
}

export const WorkEntrySchema = SchemaFactory.createForClass(WorkEntry);

WorkEntrySchema.virtual('totalSalary').get(function (this: WorkEntryDocument) {
  return this.quantity * this.ratePerPiece;
});

WorkEntrySchema.set('toJSON', { virtuals: true });
WorkEntrySchema.set('toObject', { virtuals: true });