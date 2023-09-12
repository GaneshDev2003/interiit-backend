import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IitModule } from './iit/iit.module';
import { IitsModule } from './iits/iits.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [IitModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
