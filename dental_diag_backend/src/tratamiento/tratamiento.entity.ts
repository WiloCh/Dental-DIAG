import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tratamientos'})
export class TratamientoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nombre: string;
}