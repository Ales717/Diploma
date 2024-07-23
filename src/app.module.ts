import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, EquipmentModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
