import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IitModule } from './iit/iit.module';
import { IitsModule } from './iits/iits.module';
import { AuthModule } from './auth/auth.module';
import { PsteamModule } from './psteam/psteam.module';
import { PassportModule } from '@nestjs/passport';
import { PsModule } from './ps/ps.module';
@Module({
  imports: [PassportModule.register({
    session:true,
   }),IitModule, AuthModule, PsteamModule, PsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
