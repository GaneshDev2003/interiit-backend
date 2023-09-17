import { PsService } from "./ps.service";
import{
    Controller,
    Post,
    Get,
    Body,
    UseGuards,
}from "@nestjs/common"
import { AuthenticatedGuard } from "src/auth/utils/LocalGuard";
import { CurrentUser } from "src/decorators/CurrentUser";
import { CreatePsDto } from "./create-ps.dto";
@Controller('ps')
export class PsController{
    constructor(private readonly psServie:PsService){}

    @UseGuards(AuthenticatedGuard)
    @Post('create')
    async create(@CurrentUser() user, @Body() createPsDto:CreatePsDto){
        return this.psServie.create(user.name, createPsDto);
    }
}