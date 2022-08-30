import { MedicoDto } from './dto/medico.dto';
import { MedicoService } from './medico.service';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    getAll(): Promise<import("./medico.entity").MedicoEntity[]>;
    getOne(id: number): Promise<import("./medico.entity").MedicoEntity>;
    create(dto: MedicoDto): Promise<any>;
    update(id: number, dto: MedicoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
