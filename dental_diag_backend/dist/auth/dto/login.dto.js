"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class LoginUsuarioDto {
}
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El nombre de usuario no puede estar vacío' }),
    (0, class_validator_1.MaxLength)(10, { message: 'Nombre de usuario: longitud máxima de 10' }),
    __metadata("design:type", String)
], LoginUsuarioDto.prototype, "nombreUsuario", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'La contraseña del usuario no puede estar vacía' }),
    __metadata("design:type", String)
], LoginUsuarioDto.prototype, "password", void 0);
exports.LoginUsuarioDto = LoginUsuarioDto;
//# sourceMappingURL=login.dto.js.map