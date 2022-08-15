import { MedicoDto } from './dto/medico.dto';
import { MedicoEntity } from './medico.entity';
import { MedicoRepository } from './medico.repository';
export declare class MedicoService {
    private medicoRepository;
    constructor(medicoRepository: MedicoRepository);
    getAll(): Promise<MedicoEntity[]>;
    findById(cedula: number): Promise<MedicoEntity>;
    create(dto: MedicoDto): Promise<any>;
    update(cedula: number, dto: MedicoDto): Promise<any>;
    delete(cedula: number): Promise<any>;
}
