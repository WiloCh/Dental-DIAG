import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CreateRolDto } from './dto/create-rol.dto';
import { RolEntity } from './rol.entity';
import { RolRepository } from './rol.repository';

@Injectable()
export class RolService {

    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository
    ) {}

    async getall(): Promise<RolEntity[]> {
        const roles = await this.rolRepository.find();
        if(!roles.length) throw new NotFoundException(new MessageDto('No hay Roles en la Lista'));
        return roles;
    }

    async create(dto: CreateRolDto): Promise<any> {
        const exists = await this.rolRepository.findOne({where: {rolNombre: dto.rolNombre}});
        if(exists) throw new BadRequestException(new MessageDto('Ese Rol ya Existe'));
        await this.rolRepository.save(dto as RolEntity);
        return new MessageDto('Rol Creado');
    }
}
