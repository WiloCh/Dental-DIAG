import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { IsNotCedula } from "src/decorators/is-not-cedula.decorator";

export class PacienteDto {

    @IsNotCedula({message: 'El campo Cedula esta vacio'})
    cedula?: number;

    @IsNotBlank({message: 'El campo Nombre esta vacio'})
    nombre?: string;

    @IsNumber()
    @IsNotEmpty({message: 'El campo Edad esta vacio'})
    @Min(1)
    @Max(110)
    edad?: number;

    @IsNotBlank({message: 'El campo Sexo esta vacio'})
    sexo?: string;

    @IsNotBlank({message: 'El campo Celular esta vacio'})
    celular?: string;

    @IsNotBlank({message: 'El campo Correo esta vacio'})
    correo?: string;

}