import { TratamientoDto } from './dto/tratamiento.dto';
import { TratamientoService } from './tratamiento.service';
export declare class TratamientoController {
    private readonly tratamientoService;
    constructor(tratamientoService: TratamientoService);
    getAll(): Promise<import("./tratamiento.entity").TratamientoEntity[]>;
    getOne(id: number): Promise<import("./tratamiento.entity").TratamientoEntity>;
    create(dto: TratamientoDto): Promise<any>;
    update(id: number, dto: TratamientoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
