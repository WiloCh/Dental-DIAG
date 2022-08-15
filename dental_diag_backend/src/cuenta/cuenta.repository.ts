import { EntityRepository, Repository } from "typeorm";
import { CuentaEntity } from "./cuenta.entity";

@EntityRepository(CuentaEntity)
export class CuentaRepository extends Repository<CuentaEntity> {}