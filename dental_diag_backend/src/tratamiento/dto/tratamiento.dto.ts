import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class TratamientoDto{

    @IsNotBlank({message: 'El campo Nombre esta vacio'})
    nombre?: string;

}