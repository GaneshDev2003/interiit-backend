import { Module } from '@nestjs/common';
import { IitModule } from 'src/iit/iit.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PsController } from './ps.controller';
import { PsService } from './ps.service';

@Module({
    imports:[
        PrismaModule,
        IitModule,
    ],
    controllers:[
        PsController
    ],
    providers:[
        PsService
    ]
})
export class PsModule {}
