import { Injectable } from '@nestjs/common';
import { CreatePsteamDto } from './dto/create-psteam.dto';
import { UpdatePsteamDto } from './dto/update-psteam.dto';

@Injectable()
export class PsteamService {
  create(createPsteamDto: CreatePsteamDto) {
    return 'This action adds a new psteam';
  }

  findAll() {
    return `This action returns all psteam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} psteam`;
  }

  update(id: number, updatePsteamDto: UpdatePsteamDto) {
    return `This action updates a #${id} psteam`;
  }

  remove(id: number) {
    return `This action removes a #${id} psteam`;
  }
}
