import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { IitService } from './iit.service';
import { CreateIITDto } from './create-iit.dto';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';
import { CurrentUser } from 'src/decorators/CurrentUser';
@Controller('iit')
export class IitController {
    constructor(private readonly iitService: IitService){}
    
    @Get('findall')
    findall(){
        return this.iitService.findall()
    }

    @Post('create')
    registerUser(@Body() createUserDto:CreateIITDto){
        console.log(createUserDto)
        return this.iitService.registerUser(createUserDto)
    }
    @UseGuards(AuthenticatedGuard)
    @Get('')
    getCurrentUser(@CurrentUser()user){
        console.log(user);
        return user;
    }
}
