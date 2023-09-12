import { Controller, Get, Post, Body } from '@nestjs/common';
import { IitService } from './iit.service';
import { CreateIITDto } from './create-iit.dto';
@Controller('iit')
export class IitController {
    constructor(private readonly iitService: IitService){}
    
    @Get('findall')
    findall(){
        return this.iitService.findall()
    }

    @Post()
    registerUser(@Body() createUserDto:CreateIITDto){
        console.log(createUserDto)
        return this.iitService.registerUser(createUserDto)
    }
}
