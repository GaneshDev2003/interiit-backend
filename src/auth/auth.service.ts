
import {IitService} from 'src/iit/iit.service';
  import {Injectable} from '@nestjs/common';
  import {JwtService} from '@nestjs/jwt';
  import {HashService} from 'src/iit/hash.service';
  import { Inject } from '@nestjs/common';
  @Injectable()
  export class AuthService {
    constructor(private iitService: IitService,
      private hashService: HashService,
      private jwtService: JwtService) {}
  
    async validateUser(email: string, pass: string): Promise < any > {
      console.log("Inside validate user")
      const user = await this.iitService.getUserByUsername(email);
      if (user && (await this.hashService.comparePassword(pass, user.password))) {
        return user;
      }
      return null;
    }
  
    async login(user: any) {
      const payload = {
        username: user.name,
        sub: user.id
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }