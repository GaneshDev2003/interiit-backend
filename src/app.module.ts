import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IitModule } from './iit/iit.module';
import { IitsModule } from './iits/iits.module';
import { AuthModule } from './auth/auth.module';
import { PsteamsModule } from './psteams/psteams.module';
import { PsModule } from './ps/ps.module';
import { PsteamModule } from './psteam/psteam.module';
import { PsteamsModule } from './psteams/psteams.module';
@Module({
  imports: [IitModule, PsteamsModule, Module, PsteamModule, PsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
