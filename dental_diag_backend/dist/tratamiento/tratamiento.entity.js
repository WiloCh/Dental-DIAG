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
exports.TratamientoEntity = void 0;
const cuenta_entity_1 = require("../cuenta/cuenta.entity");
const typeorm_1 = require("typeorm");
let TratamientoEntity = class TratamientoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TratamientoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], TratamientoEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cuenta_entity_1.CuentaEntity, (cuenta) => cuenta.tratamiento),
    __metadata("design:type", cuenta_entity_1.CuentaEntity)
], TratamientoEntity.prototype, "cuentas", void 0);
TratamientoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tratamientos' })
], TratamientoEntity);
exports.TratamientoEntity = TratamientoEntity;
//# sourceMappingURL=tratamiento.entity.js.map