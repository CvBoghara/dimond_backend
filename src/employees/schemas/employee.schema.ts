import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: true })
export class Employee {
  @Prop({ required: true, unique: true })
  employeeId!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  department!: string;

  @Prop({ required: true })
  joiningDate!: Date;
}

export const EmployeeSchema =
  SchemaFactory.createForClass(Employee);