import { ConsultaEntity } from "src/consulta/consulta.entity";
export declare class PacienteEntity {
    cedula: number;
    nombre: string;
    edad: number;
    sexo: string;
    celular: string;
    correo: string;
    consultas: ConsultaEntity[];
    cuentas: ConsultaEntity[];
}
