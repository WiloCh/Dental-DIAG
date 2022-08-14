import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsNotCedula(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsNotCedula',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    if(typeof value !== 'number') return false;
                    return true;
                },
            },
        });
    };
}