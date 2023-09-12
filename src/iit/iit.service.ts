import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { IIT, PrismaClient } from '@prisma/client';
import { CreateIITDto } from './create-iit.dto';
import { HashService } from './hash.service';
@Injectable()
export class IitService {
    constructor(private prisma: PrismaService, private hashService: HashService){}
    
    findall(){
        return this.prisma.iIT.findMany();
    }

    getUserByUsername(username: string){
        return this.prisma.iIT.findFirst({where: {
            name: username
        }})
    }

    async registerUser(createiitdto: CreateIITDto){
        console.log(createiitdto)
        var password = await this.hashService.hashPassword(createiitdto.password)
        const user = await this.prisma.iIT.create({
            data:{
                name: createiitdto.name,
                password: password
            }
        })
    }
}
