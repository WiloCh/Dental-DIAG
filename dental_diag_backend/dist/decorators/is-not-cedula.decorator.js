"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotCedula = void 0;
const class_validator_1 = require("class-validator");
function IsNotCedula(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNotCedula',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (typeof value !== 'number')
                        return false;
                    return true;
                },
            },
        });
    };
}
exports.IsNotCedula = IsNotCedula;
//# sourceMappingURL=is-not-cedula.decorator.js.map