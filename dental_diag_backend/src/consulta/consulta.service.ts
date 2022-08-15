import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { MedicoEntity } from 'src/medico/medico.entity';
import { MedicoRepository } from 'src/medico/medico.repository';
import { ConsultaEntity } from './consulta.entity';
import { ConsultaRepository } from './consulta.repository';
import { ConsultaDto } from './dto/consulta.dto';

@Injectable()
export class ConsultaService {

    constructor(
        @InjectRepository(ConsultaEntity) private consultaRepository: ConsultaRepository,
        @InjectRepository(MedicoEntity) private medicoRepository: MedicoRepository
    ) { }

    async getAll(): Promise<ConsultaEntity[]>{
        const list = await this.consultaRepository.find();
        if(!list.length){
            throw new NotFoundException(new MessageDto('Lista de Consultas Vacia'))
        }
        return list;
    }

    async findById(id: number): Promise<ConsultaEntity> {
        const consulta = await this.consultaRepository.findOneBy({id});
        if(!consulta){
            throw new NotFoundException(new MessageDto('La consulta no Existe'))
        }
        return consulta;
    }

    async findByMed_Id(cedula: number): Promise<MedicoEntity> {
        const medico = await this.medicoRepository.findOneBy({cedula});
        if(!medico){
            throw new NotFoundException(new MessageDto('El Medico no Existe'))
        }
        return medico;
    }

    async findByMotivo(motivo: string): Promise<ConsultaEntity> {
        const consulta = await this.consultaRepository.findOneBy({motivo: motivo});
        return consulta;
    }

    async create(dto: ConsultaDto): Promise<any> {
        const exists = await this.findByMotivo(dto.motivo);
        const consulta = this.consultaRepository.create(dto);
        await this.consultaRepository.save(consulta);
        return new MessageDto('Consulta Creada');
    }

    async update(id: number, dto: ConsultaDto): Promise<any>{
        const consulta = await this.findById(id);
        if(!consulta)
        throw new BadRequestException(new MessageDto('Consulta no Existente'));
        dto.fecha? consulta.fecha = dto.fecha : consulta.fecha = consulta.fecha;
        dto.motivo? consulta.motivo = dto.motivo : consulta.motivo = consulta.motivo;
        dto.medico? consulta.medico = dto.medico : consulta.medico = consulta.medico;
        dto.paciente? consulta.paciente = dto.paciente : consulta.paciente = consulta.paciente;
        await this.consultaRepository.save(consulta);
        return new MessageDto ('Consulta actualizada');
    }
    
    async delete(id: number): Promise<any> {
        const consulta = await this.findById(id);
        await this.consultaRepository.delete(consulta);
        return new MessageDto ('Consulta Eliminada');
    }
}
