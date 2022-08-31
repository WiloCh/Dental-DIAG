import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcryptjs';
import { MessageDto } from 'src/common/message.dto';
import { RolEntity } from 'src/rol/rol.entity';
import { RolNombre } from 'src/rol/rol.enum';
import { RolRepository } from 'src/rol/rol.repository';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { AuthRepository } from './auth.repository';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { PayloadInterface } from './payload.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly authRepository: AuthRepository,
        private readonly jwtService: JwtService
    ) {}

    async getall(): Promise<UsuarioEntity[]> {
        const usuarios = await this.authRepository.find();
        if(!usuarios.length) throw new NotFoundException(new MessageDto('No hay Usuarios en la Lista'));
        return usuarios;
    }

    async create(dto: NuevoUsuarioDto): Promise<any> {
        const {nombreUsuario, email} = dto;
        const exists = await this.authRepository.findOne({where: [{nombreUsuario: nombreUsuario}, {email: email}]});
        if(exists) throw new BadRequestException(new MessageDto('Ese Usuario ya Existe'));
        const rolUser = await this.rolRepository.findOne({where: {rolNombre: RolNombre.USER}});
        if(!rolUser) throw new InternalServerErrorException(new MessageDto('Los roles aún no han sido creados'));
        const user = this.authRepository.create(dto);
        user.roles = [rolUser];
        await this.authRepository.save(user);
        return new MessageDto('Usuario Creado');
    }

    async login(dto: LoginUsuarioDto): Promise<any> {
        const {nombreUsuario} = dto;
        const usuario = await this.authRepository.findOne({where: [{nombreUsuario: nombreUsuario}, {email: nombreUsuario}]});
        if(!usuario) return new UnauthorizedException(new MessageDto('La Contraseña o El Usuario son Erróneas'));
        const passwordOK = await compare(dto.password, usuario.password);
        if(!passwordOK) return new UnauthorizedException(new MessageDto('La Contraseña o El Usuario son Erróneas'));
        const payload: PayloadInterface = {
            id: usuario.id,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            roles: usuario.roles.map(rol => rol.rolNombre as RolNombre)
        }
        const token = await this.jwtService.sign(payload);
        return {token};
    }
}
