import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ProductoDto } from './dto/producto.dto';
import { ProductoEntity } from './producto.entity';
import { ProductoRepository } from './producto.repository';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: ProductoRepository
    ) { }

    async getAll(): Promise<ProductoEntity[]> {
        const list = await this.productoRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('La Lista esta Vacia'));
        }
        return list;
    }

    async findById(id: number): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne(id);
        if (!producto) {
            throw new NotFoundException(new MessageDto('Ese Producto No Existe'));
        }
        return producto;
    }

    async findByNombre(nombre: string): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne({ nombre: nombre });
        return producto;
    }

    async create(dto: ProductoDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        if (exists) throw new BadRequestException(new MessageDto('Ese nombre ya Existe'));
        const producto = this.productoRepository.create(dto);
        await this.productoRepository.save(producto);
        return new MessageDto(`Producto ${producto.nombre} Creado`);
    }

    async update(id: number, dto: ProductoDto): Promise<any> {
        const producto = await this.findById(id);
        if (!producto)
            throw new BadRequestException(new MessageDto('Ese Producto No Existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('Ese nombre ya Existe'));
        dto.nombre ? producto.nombre = dto.nombre : producto.nombre = producto.nombre;
        dto.marca ? producto.marca = dto.marca : producto.marca = producto.marca;
        dto.precio ? producto.precio = dto.precio : producto.precio = producto.precio;
        await this.productoRepository.save(producto);
        return new MessageDto (`Producto ${producto.nombre} Actualizado`);
    }

    async delete(id: number): Promise<any> {
        const producto = await this.findById(id);
        await this.productoRepository.delete(producto);
        return new MessageDto (`Producto ${producto.nombre} Eliminado`);
    }
}
