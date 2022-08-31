import { IsEnum } from "class-validator";
import { RolNombre } from "../rol.enum";

export class CreateRolDto {

    @IsEnum(RolNombre, {message: 'el rol sólo puede ser user, medic o admin'})
    rolNombre: string;
}