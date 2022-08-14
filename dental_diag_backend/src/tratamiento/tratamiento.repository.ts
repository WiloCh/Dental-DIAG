import { EntityRepository, Repository } from "typeorm";
import { TratamientoEntity } from "./tratamiento.entity";

@EntityRepository(TratamientoEntity)
export class TratamientoRepository extends Repository<TratamientoEntity> {}