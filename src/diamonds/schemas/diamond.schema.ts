import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiamondDocument = Diamond & Document;

@Schema({ timestamps: true })
export class Diamond {
  @Prop({ required: true, unique: true })
  diamondCode!: string;

  @Prop({ required: true })
  caratWeight!: number;

  @Prop({
    required: true,
    enum: ['Pending', 'In Progress', 'Completed'],
  })
  status!: string;
}

export const DiamondSchema = SchemaFactory.createForClass(Diamond);