import { CuentaEntity } from "src/cuenta/cuenta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tratamientos'})
export class TratamientoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nombre: string;

    @OneToMany(() => CuentaEntity, (cuenta) => cuenta.tratamiento)
    cuentas: CuentaEntity;
}