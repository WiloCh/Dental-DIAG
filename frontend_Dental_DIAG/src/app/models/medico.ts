export class Medico {
    id!: number;
    cedula: number;
    nombre: string;
    celular: string;
    especialidad: string;

    constructor(cedula: number, nombre: string, celular: string, especialidad: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.celular = celular;
        this.especialidad = especialidad;
    }
}
