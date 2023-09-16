import { Injectable } from '@nestjs/common';
import { CreatePS } from './create-p.dto';
import { UpdatePDto } from './update-p.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PsService {

  constructor(private prisma: PrismaService) { }

  create(createPDto: CreatePS) {
    return 'This action adds a new p';
  }

  findAll() {
    return this.prisma.CreatePS.findMany();
  }



  update(id: number, updatePDto: UpdatePDto) {
    return `This action updates a #${id} p`;
  }

  remove(id: number) {
    return `This action removes a #${id} p`;
  }
}
