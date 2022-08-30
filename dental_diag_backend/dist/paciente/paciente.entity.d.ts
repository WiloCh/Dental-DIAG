import { ConsultaEntity } from "src/consulta/consulta.entity";
import { CuentaEntity } from "src/cuenta/cuenta.entity";
export declare class PacienteEntity {
    id: number;
    cedula: number;
    nombre: string;
    edad: number;
    sexo: string;
    celular: string;
    correo: string;
    consultas: ConsultaEntity[];
    cuentas: CuentaEntity;
}
