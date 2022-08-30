import { MedicoService } from 'src/medico/medico.service';
import { PacienteService } from 'src/paciente/paciente.service';
import { ConsultaEntity } from './consulta.entity';
import { ConsultaRepository } from './consulta.repository';
import { ConsultaDto } from './dto/consulta.dto';
export declare class ConsultaService {
    private consultaRepository;
    private medicoService;
    private pacienteService;
    constructor(consultaRepository: ConsultaRepository, medicoService: MedicoService, pacienteService: PacienteService);
    getAll(): Promise<ConsultaEntity[]>;
    findById(id: number): Promise<ConsultaEntity>;
    create(dto: ConsultaDto): Promise<any>;
    update(id: number, dto: ConsultaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
