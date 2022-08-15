import { PacienteEntity } from "src/paciente/paciente.entity";
import { TratamientoEntity } from "src/tratamiento/tratamiento.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'cuentas'})
export class CuentaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 200, nullable: false})
    descripcion: string;

    @ManyToOne(() => PacienteEntity, (paciente) => paciente.cuentas)
    @JoinColumn({name: 'cedula_paciente'})
    paciente: PacienteEntity[];

    @ManyToOne(() => TratamientoEntity, (tratamiento) => tratamiento.cuentas)
    @JoinColumn({name: 'id_tratamiento'})
    tratamiento: TratamientoEntity[];
}