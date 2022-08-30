import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { PacienteService } from 'src/paciente/paciente.service';
import { TratamientoService } from 'src/tratamiento/tratamiento.service';
import { Any } from 'typeorm';
import { CuentaEntity } from './cuenta.entity';
import { CuentaRepository } from './cuenta.repository';
import { CuentaDto } from './dto/cuenta.dto';

@Injectable()
export class CuentaService {

    constructor(
        @InjectRepository(CuentaEntity) private cuentaRepository: CuentaRepository,
        private pacienteService: PacienteService,
        private tratamientoService: TratamientoService
    ) { }

    async getAll(): Promise<CuentaEntity[]>{
        const list = await this.cuentaRepository.find({ relations: ['tratamiento', 'paciente'] });
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

    async create(dto: CuentaDto): Promise<any> {
        const paciente = await this.pacienteService.findById(dto.paciente);
        const tratamiento = await this.tratamientoService.findById(dto.tratamiento);
        const cuenta = this.cuentaRepository.create({...dto, paciente: paciente, tratamiento:tratamiento});
        await this.cuentaRepository.save(cuenta);
        return new MessageDto('Cuenta Creada');
    }

    async update(id: number, dto: CuentaDto): Promise<any>{
        const paciente = await this.pacienteService.findById(dto.paciente);
        const tratamiento = await this.tratamientoService.findById(dto.tratamiento);
        const cuenta = await this.findById(id);
        if(!cuenta)
        throw new BadRequestException(new MessageDto('Cuenta no Existente'));
        dto.descripcion? cuenta.descripcion = dto.descripcion : cuenta.descripcion = cuenta.descripcion;
        dto.paciente? paciente.id = dto.paciente : paciente.id = paciente.id;
        dto.tratamiento? tratamiento.id = dto.tratamiento : tratamiento.id = tratamiento.id;
        await this.cuentaRepository.save(cuenta);
        return new MessageDto ('Cuenta actualizada');
    }
    
    async delete(id: number): Promise<any> {
        const cuenta = await this.findById(id);
        await this.cuentaRepository.delete(cuenta);
        return new MessageDto ('Cuenta Eliminada');
    }

}
