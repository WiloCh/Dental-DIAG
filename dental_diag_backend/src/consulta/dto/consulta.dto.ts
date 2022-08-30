import { IsDate, IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ConsultaDto{

    @IsDate()
    @IsNotEmpty()
    fecha?: Date;

    @IsNotBlank({message: 'El Motivo esta vacio'})
    motivo?: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    medico?: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    paciente?: number;
}