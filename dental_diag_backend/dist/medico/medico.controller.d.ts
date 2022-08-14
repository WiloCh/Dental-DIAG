import { MedicoDto } from './dto/medico.dto';
import { MedicoService } from './medico.service';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    getAll(): Promise<import("./medico.entity").MedicoEntity[]>;
    getOne(cedula: number): Promise<import("./medico.entity").MedicoEntity>;
    create(dto: MedicoDto): Promise<any>;
    update(cedula: number, dto: MedicoDto): Promise<any>;
    delete(cedula: number): Promise<any>;
}
