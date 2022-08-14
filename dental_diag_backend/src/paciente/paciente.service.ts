import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { PacienteDto } from './dto/paciente.dto';
import { PacienteEntity } from './paciente.entity';
import { PacienteRepository } from './paciente.repository';

@Injectable()
export class PacienteService {

    constructor(
        @InjectRepository(PacienteEntity) private pacienteRepository: PacienteRepository
    ){}

    async getAll(): Promise<PacienteEntity[]>{
        const list = await this.pacienteRepository.find();
        if(!list.length){
            throw new NotFoundException(new MessageDto('Lista de Pacientes esta Vacia'))
        }
        return list;
    }

    async findById(cedula: number): Promise<PacienteEntity> {
        const paciente = await this.pacienteRepository.findOneBy({cedula});
        if(!paciente){
            throw new NotFoundException(new MessageDto('El Paciente no Existe'))
        }
        return paciente;
    }

    async findByNombre(nombre: string): Promise<PacienteEntity> {
        const paciente = await this.pacienteRepository.findOneBy({nombre: nombre});
        return paciente;
    }

    async create(dto: PacienteDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        const paciente = this.pacienteRepository.create(dto);
        await this.pacienteRepository.save(paciente);
        return new MessageDto('Paciente Agregado');
    }

    async update(cedula: number, dto: PacienteDto): Promise<any>{
        const paciente = await this.findById(cedula);
        if(!paciente)
        throw new BadRequestException(new MessageDto('El Paciente no Existe'));
        dto.nombre? paciente.nombre = dto.nombre : paciente.nombre = paciente.nombre;
        dto.edad? paciente.edad = dto.edad : paciente.edad = paciente.edad;
        dto.sexo? paciente.sexo = dto.sexo : paciente.sexo = paciente.sexo;
        dto.celular? paciente.celular = dto.celular : paciente.celular = paciente.celular;
        dto.correo? paciente.correo = dto.correo : paciente.correo = paciente.correo;
        await this.pacienteRepository.save(paciente);
        return new MessageDto ('Datos del Paciente actualizados');
    }
    
    async delete(cedula: number): Promise<any> {
        const paciente = await this.findById(cedula);
        await this.pacienteRepository.delete(paciente);
        return new MessageDto ('Paciente Eliminado');
    }
}
