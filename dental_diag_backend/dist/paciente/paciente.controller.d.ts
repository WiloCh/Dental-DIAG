import { PacienteDto } from './dto/paciente.dto';
import { PacienteService } from './paciente.service';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    getAll(): Promise<import("./paciente.entity").PacienteEntity[]>;
    getOne(id: number): Promise<import("./paciente.entity").PacienteEntity>;
    create(dto: PacienteDto): Promise<any>;
    update(id: number, dto: PacienteDto): Promise<any>;
    delete(id: number): Promise<any>;
}
