import { TratamientoDto } from './dto/tratamiento.dto';
import { TratamientoEntity } from './tratamiento.entity';
import { TratamientoRepository } from './tratamiento.repository';
export declare class TratamientoService {
    private tratamientoRepository;
    constructor(tratamientoRepository: TratamientoRepository);
    getAll(): Promise<TratamientoEntity[]>;
    findById(id: number): Promise<TratamientoEntity>;
    findByNombre(nombre: string): Promise<TratamientoEntity>;
    create(dto: TratamientoDto): Promise<any>;
    update(id: number, dto: TratamientoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
