import { AuthService } from './auth.service';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAll(): Promise<import("../usuario/usuario.entity").UsuarioEntity[]>;
    create(dto: NuevoUsuarioDto): Promise<any>;
    login(dto: LoginUsuarioDto): Promise<any>;
}
