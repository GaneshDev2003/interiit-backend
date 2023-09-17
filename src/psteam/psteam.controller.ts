import { PsteamService } from "./psteam.service";
import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
} from "@nestjs/common"
import { AuthenticatedGuard } from "src/auth/utils/LocalGuard";
import { CurrentUser } from "src/decorators/CurrentUser";
import { CreatePsteamDto } from "./create-psteam.dto";
@Controller('psteam')
export class PsteamController {
  constructor(private readonly psteamService: PsteamService) { }

  @UseGuards(AuthenticatedGuard)
  @Post('create')
  async createPsTeam(@CurrentUser() user, @Body() createPsteamDto: CreatePsteamDto) {
    return this.psteamService.create(user.name, createPsteamDto);
  }
}
