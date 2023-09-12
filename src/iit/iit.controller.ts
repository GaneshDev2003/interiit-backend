import { Controller } from '@nestjs/common';
import {Get} from '@nestjs/common';
import { IitService } from './iit.service';
@Controller('iit')
export class IitController {
    constructor(private readonly iitService: IitService){}
    
    @Get('findall')
    findall(){
        return this.iitService.findall()
    }
}
