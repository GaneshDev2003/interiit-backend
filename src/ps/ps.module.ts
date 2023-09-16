import { Module } from '@nestjs/common';
import { PsService } from './ps.service';
import { PsController } from './ps.controller';

@Module({
  controllers: [PsController],
  providers: [PsService]
})
export class PsModule {}
