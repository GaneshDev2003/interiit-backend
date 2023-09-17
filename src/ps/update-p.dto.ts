import { PartialType } from '@nestjs/mapped-types';
import { CreatePS } from './create-p.dto';

export class UpdatePDto extends PartialType(CreatePS) { }
