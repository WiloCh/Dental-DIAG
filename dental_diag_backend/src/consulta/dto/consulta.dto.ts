import { IsArray, IsDate, IsNotEmpty } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { MedicoEntity } from "src/medico/medico.entity";
import { PacienteEntity } from "src/paciente/paciente.entity";


export class ConsultaDto{

    @IsDate()
    @IsNotEmpty()
    fecha?: Date;

    @IsNotBlank({message: 'El Motivo esta vacio'})
    motivo?: string;

    @IsNotEmpty()
    medico?: MedicoEntity[];

    @IsNotEmpty()
    paciente?: PacienteEntity[];
}