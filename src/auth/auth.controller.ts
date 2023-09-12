import {AuthService} from './auth.service';
  import {
    Controller,
    Request,
    UseGuards,
    Post,
    Body
  } from '@nestjs/common';
  import {AuthGuard} from '@nestjs/passport';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
    //@UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Body() user:any) {
      return this.authService.login(user);
    }
}