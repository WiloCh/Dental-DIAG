import { ConsultaEntity } from "src/consulta/consulta.entity";
export declare class MedicoEntity {
    id: number;
    cedula: number;
    nombre: string;
    celular: string;
    especialidad: string;
    consultas: ConsultaEntity[];
}
