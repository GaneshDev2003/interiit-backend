import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsService } from './ps.service';
import { CreatePS } from './create-p.dto';
import { UpdatePDto } from './update-p.dto';

@Controller('ps')
export class PsController {
  constructor(private readonly psService: PsService) { }

  @Post()
  create(@Body() createPDto: CreatePS) {
    return this.psService.create(createPDto);
  }

  @Get()
  findAll() {
    return this.psService.findAll();
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePDto: UpdatePDto) {
    return this.psService.update(+id, updatePDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psService.remove(+id);
  }
}
