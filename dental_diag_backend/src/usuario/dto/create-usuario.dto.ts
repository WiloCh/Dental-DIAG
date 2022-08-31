import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class CreateUsuarioDto {

    @IsString()
    @MaxLength(10, {message: 'Nombre: Longitud Máxima de 50'})
    nombre: string;

    @IsNotBlank({message: 'El Nombre de Usuario no Puede Estar Vacío'})
    @MaxLength(10, {message: 'Nombre de Usuario: longitud máxima de 50'})
    nombreUsuario: string;

    @IsEmail()
    email: string;

    @IsNotBlank({message: 'La Contraseña del Usuario No Puede estar Vacía'})
    password: string;
}