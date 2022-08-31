import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { MedicoDto } from './dto/medico.dto';
import { MedicoEntity } from './medico.entity';
import { MedicoRepository } from './medico.repository';

@Injectable()
export class MedicoService {

    constructor(
        @InjectRepository(MedicoEntity) private medicoRepository: MedicoRepository
    ){}

    async getAll(): Promise<MedicoEntity[]>{
        const list = await this.medicoRepository.find();
        if(!list.length){
            throw new NotFoundException(new MessageDto('Lista de Medicos esta Vacia'))
        }
        return list;
    }

    async findById(id: number): Promise<MedicoEntity> {
        const medico = await this.medicoRepository.findOne({id});
        if(!medico){
            throw new NotFoundException(new MessageDto('El Medico no Existe'))
        }
        return medico;
    }

    async create(dto: MedicoDto): Promise<any> {
        const medico = this.medicoRepository.create(dto);
        await this.medicoRepository.save(medico);
        return new MessageDto('Medico Agregado');
    }

    async update(id: number, dto: MedicoDto): Promise<any>{
        const medico = await this.findById(id);
        if(!medico)
        throw new BadRequestException(new MessageDto('El Medico no existente'));
        dto.nombre? medico.nombre = dto.nombre : medico.nombre = medico.nombre;
        dto.celular? medico.celular = dto.celular : medico.celular = medico.celular;
        dto.especialidad? medico.especialidad = dto.especialidad : medico.especialidad = medico.especialidad;
        await this.medicoRepository.save(medico);
        return new MessageDto ('Datos del Medico actualizados');
    }
    
    async delete(id: number): Promise<any> {
        const medico = await this.findById(id);
        await this.medicoRepository.delete(medico);
        return new MessageDto ('Medico fue Eliminado');
    }
}
