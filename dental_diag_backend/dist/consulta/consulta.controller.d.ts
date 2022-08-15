import { ConsultaService } from './consulta.service';
import { ConsultaDto } from './dto/consulta.dto';
export declare class ConsultaController {
    private readonly consultaService;
    constructor(consultaService: ConsultaService);
    getAll(): Promise<import("./consulta.entity").ConsultaEntity[]>;
    getOne(id: number): Promise<import("./consulta.entity").ConsultaEntity>;
    create(dto: ConsultaDto): Promise<any>;
    update(id: number, dto: ConsultaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
