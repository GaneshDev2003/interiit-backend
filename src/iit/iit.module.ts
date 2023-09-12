import { Module } from '@nestjs/common';
import { IitController } from './iit.controller';
import { IitService } from './iit.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IitController],
  providers: [IitService],
  imports: [PrismaModule]
})
export class IitModule {}
