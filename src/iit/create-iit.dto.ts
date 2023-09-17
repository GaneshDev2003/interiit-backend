import { UserRole } from "@prisma/client";
import { IsEnum } from "class-validator";
export class CreateIITDto{
    name: string;
    password: string;
    @IsEnum(UserRole) role: UserRole;
}
