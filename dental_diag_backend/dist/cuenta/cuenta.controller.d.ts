import { CuentaService } from './cuenta.service';
import { CuentaDto } from './dto/cuenta.dto';
export declare class CuentaController {
    private readonly cuentaService;
    constructor(cuentaService: CuentaService);
    getAll(): Promise<import("./cuenta.entity").CuentaEntity[]>;
    getOne(id: number): Promise<import("./cuenta.entity").CuentaEntity>;
    create(dto: CuentaDto): Promise<any>;
    update(id: number, dto: CuentaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
