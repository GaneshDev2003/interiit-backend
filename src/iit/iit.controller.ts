import { Controller, Get, Post, Body, UseGuards, Put, Param } from '@nestjs/common';
import { IitService } from './iit.service';
import { CreateIITDto } from './create-iit.dto';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';
import { CurrentUser } from 'src/decorators/CurrentUser';
import { FeesStatus } from './fee-status.enum';
@Controller('iit')
export class IitController {
    constructor(private readonly iitService: IitService) { }

    @Get('findall')
    findall() {
        return this.iitService.findall()
    }

    @Post('create')
    registerUser(@Body() createUserDto: CreateIITDto) {
        console.log(createUserDto)
        return this.iitService.registerUser(createUserDto)
    }
    @UseGuards(AuthenticatedGuard)
    @Get('')
    getCurrentUser(@CurrentUser() user) {
        console.log(user);
        return user;
    }

    @Put(':username/feestatus')
    async updateFeeStatus(
        @Param('username') username: string,
        @Body('newFeeStatus') newFeeStatus: FeesStatus,
    ) {
        return this.iitService.updateFeeStatus(username, newFeeStatus)
    }


}
