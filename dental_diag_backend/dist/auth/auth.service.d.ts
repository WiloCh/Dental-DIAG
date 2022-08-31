import { JwtService } from '@nestjs/jwt';
import { RolRepository } from 'src/rol/rol.repository';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { AuthRepository } from './auth.repository';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
export declare class AuthService {
    private readonly rolRepository;
    private readonly authRepository;
    private readonly jwtService;
    constructor(rolRepository: RolRepository, authRepository: AuthRepository, jwtService: JwtService);
    getall(): Promise<UsuarioEntity[]>;
    create(dto: NuevoUsuarioDto): Promise<any>;
    login(dto: LoginUsuarioDto): Promise<any>;
}
