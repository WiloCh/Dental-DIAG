import { PacienteService } from 'src/paciente/paciente.service';
import { TratamientoService } from 'src/tratamiento/tratamiento.service';
import { CuentaEntity } from './cuenta.entity';
import { CuentaRepository } from './cuenta.repository';
import { CuentaDto } from './dto/cuenta.dto';
export declare class CuentaService {
    private cuentaRepository;
    private pacienteService;
    private tratamientoService;
    constructor(cuentaRepository: CuentaRepository, pacienteService: PacienteService, tratamientoService: TratamientoService);
    getAll(): Promise<CuentaEntity[]>;
    findById(id: number): Promise<CuentaEntity>;
    create(dto: CuentaDto): Promise<any>;
    update(id: number, dto: CuentaDto): Promise<any>;
    delete(id: number): Promise<any>;
}
