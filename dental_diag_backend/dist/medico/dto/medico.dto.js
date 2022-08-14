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
exports.MedicoDto = void 0;
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
const is_not_cedula_decorator_1 = require("../../decorators/is-not-cedula.decorator");
class MedicoDto {
}
__decorate([
    (0, is_not_cedula_decorator_1.IsNotCedula)({ message: 'El campo Cedula esta vacio' }),
    __metadata("design:type", Number)
], MedicoDto.prototype, "cedula", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El campo Nombre esta vacio' }),
    __metadata("design:type", String)
], MedicoDto.prototype, "nombre", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El campo Celular esta vacio' }),
    __metadata("design:type", String)
], MedicoDto.prototype, "celular", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El campo Especialidad esta vacio' }),
    __metadata("design:type", String)
], MedicoDto.prototype, "especialidad", void 0);
exports.MedicoDto = MedicoDto;
//# sourceMappingURL=medico.dto.js.map