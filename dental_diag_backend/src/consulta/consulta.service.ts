import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { MedicoEntity } from 'src/medico/medico.entity';
import { MedicoService } from 'src/medico/medico.service';
import { PacienteService } from 'src/paciente/paciente.service';
import { ConsultaEntity } from './consulta.entity';
import { ConsultaRepository } from './consulta.repository';
import { ConsultaDto } from './dto/consulta.dto';

@Injectable()
export class ConsultaService {

    constructor(
        @InjectRepository(ConsultaEntity) private consultaRepository: ConsultaRepository,
        private medicoService: MedicoService,
        private pacienteService: PacienteService
    ) { }

    async getAll(): Promise<ConsultaEntity[]> {
        const list = await this.consultaRepository.find({ relations: ['medico', 'paciente'] });
        if (!list.length) {
            throw new NotFoundException(new MessageDto('Lista de Consultas Vacia'))
        }
        return list;
    }

    async findById(id: number): Promise<ConsultaEntity> {
        const consulta = await this.consultaRepository.findOne(id);
        if (!consulta) {
            throw new NotFoundException(new MessageDto('La consulta no Existe'))
        }
        return consulta;
    }

    async create(dto: ConsultaDto): Promise<any> {
        const medico = await this.medicoService.findById(dto.medico);
        const paciente = await this.pacienteService.findById(dto.paciente);
        const consulta = this.consultaRepository.create({ ...dto, medico: medico, paciente: paciente });
        await this.consultaRepository.save(consulta);
        return new MessageDto('Consulta Creada');
    }

    async update(id: number, dto: ConsultaDto): Promise<any> {
        const consulta = await this.findById(id);
        if (!consulta)
            throw new BadRequestException(new MessageDto('Consulta no Existente'));
        const mergeData = this.consultaRepository.merge(consulta, {...dto , medico:consulta.medico, paciente:consulta.paciente})
        await this.consultaRepository.save(mergeData);
        return new MessageDto('Consulta actualizada');
    }

    async delete(id: number): Promise<any> {
        const consulta = await this.findById(id);
        await this.consultaRepository.delete(consulta);
        return new MessageDto('Consulta Eliminada');
    }
}
