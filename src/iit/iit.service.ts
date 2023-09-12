import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { IIT, PrismaClient } from '@prisma/client';
@Injectable()
export class IitService {
    constructor(private prisma: PrismaService){}
    
    findall(){
        return this.prisma.iIT.findMany();
    }
}
