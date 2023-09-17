import { PSTeam, PSType } from "@prisma/client";


export class CreatePS {
    id: string;
    PSName: string;
    psType: PSType;
    field: string;
    PSTeams: PSTeam;
}