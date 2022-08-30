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
exports.CuentaEntity = void 0;
const paciente_entity_1 = require("../paciente/paciente.entity");
const tratamiento_entity_1 = require("../tratamiento/tratamiento.entity");
const typeorm_1 = require("typeorm");
let CuentaEntity = class CuentaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CuentaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 200, nullable: false }),
    __metadata("design:type", String)
], CuentaEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.PacienteEntity, (paciente) => paciente.cuentas),
    (0, typeorm_1.JoinColumn)({ name: 'id_paciente' }),
    __metadata("design:type", paciente_entity_1.PacienteEntity)
], CuentaEntity.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tratamiento_entity_1.TratamientoEntity, (tratamiento) => tratamiento.cuentas),
    (0, typeorm_1.JoinColumn)({ name: 'id_tratamiento' }),
    __metadata("design:type", tratamiento_entity_1.TratamientoEntity)
], CuentaEntity.prototype, "tratamiento", void 0);
CuentaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cuentas' })
], CuentaEntity);
exports.CuentaEntity = CuentaEntity;
//# sourceMappingURL=cuenta.entity.js.map