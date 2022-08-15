import { MedicoEntity } from "src/medico/medico.entity";
import { PacienteEntity } from "src/paciente/paciente.entity";
export declare class ConsultaDto {
    fecha?: Date;
    motivo?: string;
    medico?: MedicoEntity[];
    paciente?: PacienteEntity[];
}
