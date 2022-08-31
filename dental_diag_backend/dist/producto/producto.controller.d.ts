import { ProductoDto } from './dto/producto.dto';
import { ProductoService } from './producto.service';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    getAll(): Promise<import("./producto.entity").ProductoEntity[]>;
    getOne(id: number): Promise<import("./producto.entity").ProductoEntity>;
    create(dto: ProductoDto): Promise<any>;
    update(id: number, dto: ProductoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
