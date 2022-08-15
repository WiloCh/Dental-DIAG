import { MedicoEntity } from 'src/medico/medico.entity';
import { MedicoRepository } from 'src/medico/medico.repository';
import { ConsultaEntity } from './consulta.entity';
import { ConsultaRepository } from './consulta.repository';
import { ConsultaDto } from './dto/consulta.dto';
export declare class ConsultaService {
    private consultaRepository;
    private medicoRepository;
    constructor(consultaRepository: ConsultaRepository, medicoRepository: MedicoRepository);
    getAll(): Promise<ConsultaEntity[]>;
    findById(id: number): Promise<ConsultaEntity>;
    findByMed_Id(cedula: number): Promise<MedicoEntity>;
    findByMotivo(motivo: string): Promise<ConsultaEntity>;
    create(dto: ConsultaDto): Promise<any>;
    update(id: number, dto: ConsultaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
