import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { TratamientoDto } from './dto/tratamiento.dto';
import { TratamientoEntity } from './tratamiento.entity';
import { TratamientoRepository } from './tratamiento.repository';

@Injectable()
export class TratamientoService {

    constructor(
        @InjectRepository(TratamientoEntity) private tratamientoRepository: TratamientoRepository
        ) {}

        async getAll(): Promise<TratamientoEntity[]>{
            const list = await this.tratamientoRepository.find();
            if(!list.length){
                throw new NotFoundException(new MessageDto('Lista de Tratamientos Vacia'))
            }
            return list;
        }

        async findById(id: number): Promise<TratamientoEntity> {
            const tratamiento = await this.tratamientoRepository.findOneBy({id});
            if(!tratamiento){
                throw new NotFoundException(new MessageDto('Tratamientos no Existente'))
            }
            return tratamiento;
        }
    
        async findByNombre(nombre: string): Promise<TratamientoEntity> {
            const tratamiento = await this.tratamientoRepository.findOneBy({nombre: nombre});
            return tratamiento;
        }
    
        async create(dto: TratamientoDto): Promise<any> {
            const exists = await this.findByNombre(dto.nombre);
            if(exists) throw new BadRequestException(new MessageDto('Ese Nombre ya Existe'))
            const tratamiento = this.tratamientoRepository.create(dto);
            await this.tratamientoRepository.save(tratamiento);
            return new MessageDto('Tratamiento Creado');
        }
    
        async update(id: number, dto: TratamientoDto): Promise<any>{
            const tratamiento = await this.findById(id);
            if(!tratamiento)
            throw new BadRequestException(new MessageDto('Tratamientos no Existente'));
            const exists = await this.findByNombre(dto.nombre);
            if(exists && exists.id !== id) throw new BadRequestException(new MessageDto('Ese Nombre ya Existe'))
            dto.nombre? tratamiento.nombre = dto.nombre : tratamiento.nombre = tratamiento.nombre;
            await this.tratamientoRepository.save(tratamiento);
            return new MessageDto ('Tratamiento actualizados');
        }
        
        async delete(id: number): Promise<any> {
            const tratamiento = await this.findById(id);
            await this.tratamientoRepository.delete(tratamiento);
            return new MessageDto ('Tratamiento eliminado');
        }
}
