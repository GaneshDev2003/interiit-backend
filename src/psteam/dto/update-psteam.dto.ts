import { PartialType } from '@nestjs/mapped-types';
import { CreatePsteamDto } from './create-psteam.dto';

export class UpdatePsteamDto extends PartialType(CreatePsteamDto) {}
