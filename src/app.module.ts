import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IitModule } from './iit/iit.module';
import { IitsModule } from './iits/iits.module';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { PsteamModule } from './psteam/psteam.module';
import { PassportModule } from '@nestjs/passport';
import { PsModule } from './ps/ps.module';
@Module({
  imports: [PassportModule.register({
    session:true,
   }),IitModule, AuthModule, PsteamModule, PsModule],
=======
import { PsteamsModule } from './psteams/psteams.module';
import { PsModule } from './ps/ps.module';
import { PsteamModule } from './psteam/psteam.module';
import { PsteamsModule } from './psteams/psteams.module';
@Module({
  imports: [IitModule, PsteamsModule, Module, PsteamModule, PsModule],
>>>>>>> 3972e83948164f0b5f5a39a08006068e30af6170
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
