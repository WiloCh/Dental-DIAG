import { PacienteDto } from './dto/paciente.dto';
import { PacienteEntity } from './paciente.entity';
import { PacienteRepository } from './paciente.repository';
export declare class PacienteService {
    private pacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    getAll(): Promise<PacienteEntity[]>;
    findById(cedula: number): Promise<PacienteEntity>;
    findByNombre(nombre: string): Promise<PacienteEntity>;
    create(dto: PacienteDto): Promise<any>;
    update(cedula: number, dto: PacienteDto): Promise<any>;
    delete(cedula: number): Promise<any>;
}
