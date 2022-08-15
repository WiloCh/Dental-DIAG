import { CuentaEntity } from './cuenta.entity';
import { CuentaRepository } from './cuenta.repository';
import { CuentaDto } from './dto/cuenta.dto';
export declare class CuentaService {
    private cuentaRepository;
    constructor(cuentaRepository: CuentaRepository);
    getAll(): Promise<CuentaEntity[]>;
    findById(id: number): Promise<CuentaEntity>;
    findByDescripcion(descripcion: string): Promise<CuentaEntity>;
    create(dto: CuentaDto): Promise<any>;
    update(id: number, dto: CuentaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
