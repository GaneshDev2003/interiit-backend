import { Module } from '@nestjs/common';
import { IitModule } from 'src/iit/iit.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PsteamController } from './psteam.controller';
import { PsteamService } from './psteam.service';

@Module({
    imports : [
        PrismaModule,
        IitModule
    ],
    controllers: [PsteamController],
    providers: [PsteamService]
})
export class PsteamModule {
    
}
