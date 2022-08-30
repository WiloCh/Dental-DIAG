import { PacienteDto } from './dto/paciente.dto';
import { PacienteEntity } from './paciente.entity';
import { PacienteRepository } from './paciente.repository';
export declare class PacienteService {
    private pacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    getAll(): Promise<PacienteEntity[]>;
    findById(id: number): Promise<PacienteEntity>;
    findByNombre(nombre: string): Promise<PacienteEntity>;
    create(dto: PacienteDto): Promise<any>;
    update(id: number, dto: PacienteDto): Promise<any>;
    delete(id: number): Promise<any>;
}
