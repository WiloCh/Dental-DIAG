import { PacienteEntity } from "src/paciente/paciente.entity";
import { TratamientoEntity } from "src/tratamiento/tratamiento.entity";
export declare class CuentaEntity {
    id: number;
    descripcion: string;
    paciente: PacienteEntity[];
    tratamiento: TratamientoEntity[];
}
