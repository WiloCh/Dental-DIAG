import { MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class LoginUsuarioDto {

    @IsNotBlank({message: 'El nombre de usuario no puede estar vacío'})
    @MaxLength(10, {message: 'Nombre de usuario: longitud máxima de 10'})
    nombreUsuario: string;

    @IsNotBlank({message: 'La contraseña del usuario no puede estar vacía'})
    password: string;
}