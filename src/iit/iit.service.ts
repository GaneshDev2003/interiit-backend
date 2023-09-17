import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { IIT, PrismaClient } from '@prisma/client';
import { CreateIITDto } from './create-iit.dto';
import { HashService } from './hash.service';
import { CreatePsteamDto } from 'src/psteam/create-psteam.dto';
@Injectable()
export class IitService {
    constructor(private prisma: PrismaService, private hashService: HashService){}
    
    findall(){
        return this.prisma.iIT.findMany();
    }

    getUserByUsername(username: string, relations?: string[]){
        return this.prisma.iIT.findFirst(
            {
                where: {
                    name: username
                },
                include:{
                    ps_teams:true
                }
            });
    }
    async addPsteam(username:string, createPsteamDto:CreatePsteamDto){
        await this.prisma.iIT.update({
            where: {
                name: username,
            },
            data:{
                ps_teams:{
                    create:{
                        ps_id : createPsteamDto.psname,
                        team_members: {
                            createMany:{
                                data: createPsteamDto.team_members
                            }
                        }
                    }
                }
            }
        })
    }
    async registerUser(createiitdto: CreateIITDto){
        console.log(createiitdto)
        var password = await this.hashService.hashPassword(createiitdto.password)
        return await this.prisma.iIT.create({
            data:{
                name: createiitdto.name,
                password: password,
                role: createiitdto.role,
            }
        })
    }
}
