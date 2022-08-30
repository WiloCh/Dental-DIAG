import { Medico } from "./medico";
import { Paciente } from "./paciente";

export class Consulta {

    id!: number;
    fecha: Date;
    motivo: string;
    paciente: number;
    medico: number;

    constructor(fecha: Date, motivo: string, paciente: number, medico: number){
        this.fecha = fecha;
        this.motivo = motivo;
        this.paciente = paciente;
        this.medico = medico;
    }
}
