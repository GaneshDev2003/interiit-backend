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
