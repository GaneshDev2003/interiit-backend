import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IitModule } from './iit/iit.module';
import { IitsModule } from './iits/iits.module';

@Module({
  imports: [IitModule, IitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
