import { IsNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { PacienteEntity } from "src/paciente/paciente.entity";
import { TratamientoEntity } from "src/tratamiento/tratamiento.entity";

export class CuentaDto{

    @IsNotBlank({message: 'La Descripcion esta vacio'})
    descripcion?: string;

    @IsNotEmpty()
    paciente?: PacienteEntity[];

    @IsNotEmpty()
    tratamiento?: TratamientoEntity[];
}