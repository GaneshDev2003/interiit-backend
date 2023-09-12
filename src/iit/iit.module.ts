import { Module } from '@nestjs/common';
import { IitController } from './iit.controller';
import { IitService } from './iit.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { HashService } from './hash.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';

@Module({
  controllers: [IitController],
  providers: [IitService, HashService, AuthService, JwtStrategy, LocalStrategy],
  imports: [PrismaModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions:{
      expiresIn: '60d'
    }
  })]
})
export class IitModule {}
