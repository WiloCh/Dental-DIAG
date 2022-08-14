import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { IsNotCedula } from "src/decorators/is-not-cedula.decorator";

export class MedicoDto {
    
    @IsNotCedula({message: 'El campo Cedula esta vacio'})
    cedula?: number;
    
    @IsNotBlank({message: 'El campo Nombre esta vacio'})
    nombre?: string;

    @IsNotBlank({message: 'El campo Celular esta vacio'})
    celular?: string;

    @IsNotBlank({message: 'El campo Especialidad esta vacio'})
    especialidad?: string;
}