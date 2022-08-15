import { ConsultaEntity } from "src/consulta/consulta.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'medicos'})
export class MedicoEntity {

    @PrimaryColumn({ type: "int", nullable: false })
    cedula: number;

    @Column({ type: "varchar", length: 250, nullable: false })
    nombre: string;

    @Column({ type: "int", nullable: false })
    celular: string;

    @Column({ type: "varchar", length: 200, nullable: false })
    especialidad: string;

    @OneToMany(() => ConsultaEntity, (consulta) => consulta.medico)
    consultas: ConsultaEntity[];
}