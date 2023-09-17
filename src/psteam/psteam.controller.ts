<<<<<<< HEAD
import { PsteamService } from "./psteam.service";
import{
    Controller,
    Post,
    Get,
    Body,
    UseGuards,
}from "@nestjs/common"
import { AuthenticatedGuard } from "src/auth/utils/LocalGuard";
import { CurrentUser } from "src/decorators/CurrentUser";
import { CreatePsteamDto } from "./create-psteam.dto";
@Controller('psteam')
export class PsteamController{
    constructor(private readonly psteamService:PsteamService){}

    @UseGuards(AuthenticatedGuard)
    @Post('create')
    async createPsTeam(@CurrentUser() user, @Body() createPsteamDto:CreatePsteamDto){
        return this.psteamService.create(user.name, createPsteamDto);
    }
}
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsteamService } from './psteam.service';
import { CreatePsteamDto } from './dto/create-psteam.dto';
import { UpdatePsteamDto } from './dto/update-psteam.dto';

@Controller('psteam')
export class PsteamController {
  constructor(private readonly psteamService: PsteamService) {}

  @Post()
  create(@Body() createPsteamDto: CreatePsteamDto) {
    return this.psteamService.create(createPsteamDto);
  }

  @Get()
  findAll() {
    return this.psteamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psteamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsteamDto: UpdatePsteamDto) {
    return this.psteamService.update(+id, updatePsteamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psteamService.remove(+id);
  }
}
>>>>>>> 3972e83948164f0b5f5a39a08006068e30af6170
