import { EntityRepository, Repository } from "typeorm";
import { ConsultaEntity } from "./consulta.entity";

@EntityRepository(ConsultaEntity)
export class ConsultaRepository extends Repository<ConsultaEntity> {}