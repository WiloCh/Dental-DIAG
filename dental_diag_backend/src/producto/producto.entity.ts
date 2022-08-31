import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productos'})
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false, unique: true})
    nombre: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    marca: string;

    @Column({type: 'float', nullable: false})
    precio: number;
}