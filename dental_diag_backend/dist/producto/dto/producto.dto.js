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
exports.ProductoDto = void 0;
const class_validator_1 = require("class-validator");
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class ProductoDto {
}
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'El Nombre no Puede estar vacia' }),
    __metadata("design:type", String)
], ProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, is_not_blank_decorator_1.IsNotBlank)({ message: 'La Marca no Puede estar vacia' }),
    __metadata("design:type", String)
], ProductoDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0.01, { message: 'El Precio debe ser al menos mayor de 0.01 $' }),
    __metadata("design:type", Number)
], ProductoDto.prototype, "precio", void 0);
exports.ProductoDto = ProductoDto;
//# sourceMappingURL=producto.dto.js.map