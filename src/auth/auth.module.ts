import {
    Module
  } from '@nestjs/common';
  import {
    AuthService
  } from './auth.service';
  import {
    AuthController
  } from './auth.controller';
  import {
    JwtModule
  } from '@nestjs/jwt';
  import {
    jwtConstants
  } from 'src/strategy/constants';
  import {
    IitService
  } from 'src/iit/iit.service';
  import {
    HashService
  } from 'src/iit/hash.service';
  import {
    LocalStrategy
  } from 'src/strategy/local.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
  
  @Module({
    imports: [
     PrismaModule,
     JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {
          expiresIn: '60d'
        },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService, IitService, LocalStrategy, HashService],
  })
  export class AuthModule {}