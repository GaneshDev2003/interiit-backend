import { Injectable , Inject, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { CreatePsDto } from './create-ps.dto';
import { IitService } from 'src/iit/iit.service';
import { UserRole } from '@prisma/client';
import { createECDH } from 'crypto';
@Injectable()
export class PsService{
    constructor(
        @Inject(IitService) private iitService:IitService,
        private prisma:PrismaService
    ){}
    async create(username:string, createPsDto:CreatePsDto){
        let userDB = await this.iitService.getUserByUsername(username);
        if(userDB.role == UserRole.PARTICIPANT){
            throw new UnauthorizedException();
            return;
        } 
        else{
            return this.prisma.pS.create({
                data:{
                    name:createPsDto.name,
                    content: createPsDto.content,
                    psType: createPsDto.ps_type,
                }
            });
        }
    }
}