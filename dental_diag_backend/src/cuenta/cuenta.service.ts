import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CuentaEntity } from './cuenta.entity';
import { CuentaRepository } from './cuenta.repository';
import { CuentaDto } from './dto/cuenta.dto';

@Injectable()
export class CuentaService {

    constructor(
        @InjectRepository(CuentaEntity) private cuentaRepository: CuentaRepository
    ) { }

    async getAll(): Promise<CuentaEntity[]>{
        const list = await this.cuentaRepository.find();
        if(!list.length){
            throw new NotFoundException(new MessageDto('Lista de Cuentas Vacia'))
        }
        return list;
    }

    async findById(id: number): Promise<CuentaEntity> {
        const cuenta = await this.cuentaRepository.findOneBy({id});
        if(!cuenta){
            throw new NotFoundException(new MessageDto('La cuenta no Existe'))
        }
        return cuenta;
    }

    async findByDescripcion(descripcion: string): Promise<CuentaEntity> {
        const cuenta = await this.cuentaRepository.findOneBy({descripcion: descripcion});
        return cuenta;
    }

    async create(dto: CuentaDto): Promise<any> {
        const cuenta = this.cuentaRepository.create(dto);
        await this.cuentaRepository.save(cuenta);
        return new MessageDto('Cuenta Creada');
    }

    async update(id: number, dto: CuentaDto): Promise<any>{
        const cuenta = await this.findById(id);
        if(!cuenta)
        throw new BadRequestException(new MessageDto('Cuenta no Existente'));
        dto.descripcion? cuenta.descripcion = dto.descripcion : cuenta.descripcion = cuenta.descripcion;
        await this.cuentaRepository.save(cuenta);
        return new MessageDto ('Cuenta actualizada');
    }
    
    async delete(id: number): Promise<any> {
        const cuenta = await this.findById(id);
        await this.cuentaRepository.delete(cuenta);
        return new MessageDto ('Cuenta Eliminada');
    }

}
