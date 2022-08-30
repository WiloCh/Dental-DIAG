import { Paciente } from "./paciente";
import { Tratamiento } from "./tratamiento";

export class Cuenta {
    id!: number;
    descripcion: string;
    paciente: Paciente | number=0;
    tratamiento: Tratamiento | number;

    constructor(descripcion: string, paciente: Paciente | number=0, tratamiento: Tratamiento | number=0){
        this.descripcion = descripcion;
        this.paciente = paciente;
        this.tratamiento = tratamiento;
    }
}
