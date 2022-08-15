import { ConsultaEntity } from "src/consulta/consulta.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'pacientes'})
export class PacienteEntity {
    
    @PrimaryColumn({ type: "int", nullable: false })
    cedula: number;

    @Column({ type: "varchar", length: 250, nullable: false })
    nombre: string;

    @Column({ type: "int", nullable: false })
    edad: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    sexo: string;

    @Column({ type: "int", nullable: false })
    celular: string;

    @Column({ type: "varchar", length: 200, nullable: false })
    correo: string;

    @OneToMany(() => ConsultaEntity, (consulta) => consulta.paciente)
    consultas: ConsultaEntity[];

    @OneToMany(() => ConsultaEntity, (cuenta) => cuenta.paciente)
    cuentas: ConsultaEntity[];

}