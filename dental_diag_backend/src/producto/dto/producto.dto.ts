import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ProductoDto{

    @IsNotBlank({message: 'El Nombre no Puede estar vacia'})
    nombre?: string;

    @IsNotBlank({message: 'La Marca no Puede estar vacia'})
    marca?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0.01, {message: 'El Precio debe ser al menos mayor de 0.01 $'})
    precio?: number;
}