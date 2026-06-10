import { EmployeesModule } from './employees/employees.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DiamondsModule } from './diamonds/diamonds.module';
import { WorkEntriesModule } from './work-entries/work-entries.module';
import { SalaryModule } from './salary/salary.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),

    EmployeesModule,

    DiamondsModule,

    WorkEntriesModule,

    SalaryModule,

    DashboardModule,

    ReportsModule,
  ],
})
export class AppModule {}