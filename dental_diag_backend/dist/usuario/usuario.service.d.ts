import { RolRepository } from 'src/rol/rol.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
export declare class UsuarioService {
    private readonly rolRepository;
    private readonly usuarioRepository;
    constructor(rolRepository: RolRepository, usuarioRepository: UsuarioRepository);
    getall(): Promise<UsuarioEntity[]>;
    create(dto: CreateUsuarioDto): Promise<any>;
}
