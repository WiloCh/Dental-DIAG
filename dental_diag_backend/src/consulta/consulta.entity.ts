import { MedicoEntity } from "src/medico/medico.entity";
import { PacienteEntity } from "src/paciente/paciente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'consultas'})
export class ConsultaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date", nullable:false})
    fecha: Date;

    @Column({ type: "varchar", length: 250, nullable: false})
    motivo: string;

    @ManyToOne(() => MedicoEntity, (medico) => medico.consultas)
    @JoinColumn({name: 'id_medico'})
    medico: MedicoEntity;

    @ManyToOne(() => PacienteEntity, (paciente) => paciente.consultas)
    @JoinColumn({name: 'id_paciente'})
    paciente: PacienteEntity;
}