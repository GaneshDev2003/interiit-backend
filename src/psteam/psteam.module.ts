import { Module } from '@nestjs/common';
import { PsteamService } from './psteam.service';
import { PsteamController } from './psteam.controller';

@Module({
  controllers: [PsteamController],
  providers: [PsteamService]
})
export class PsteamModule {}
