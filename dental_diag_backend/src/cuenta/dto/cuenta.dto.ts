import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { PacienteEntity } from "src/paciente/paciente.entity";
import { TratamientoEntity } from "src/tratamiento/tratamiento.entity";

export class CuentaDto{

    @IsNotBlank({message: 'La Descripcion esta vacio'})
    descripcion?: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    paciente?: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    tratamiento?: number;
}