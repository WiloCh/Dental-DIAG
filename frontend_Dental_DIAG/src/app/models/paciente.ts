export class Paciente {
    id!: number;
    cedula: number;
    nombre: string;
    edad: number;
    sexo: string;
    celular: string;
    correo: string;

    constructor(cedula: number, nombre: string, edad: number, sexo: string, celular: string, correo: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.celular = celular;
        this.correo = correo;
    }
}
