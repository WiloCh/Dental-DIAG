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
exports.PacienteEntity = void 0;
const consulta_entity_1 = require("../consulta/consulta.entity");
const typeorm_1 = require("typeorm");
let PacienteEntity = class PacienteEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], PacienteEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 250, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], PacienteEntity.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 200, nullable: false }),
    __metadata("design:type", String)
], PacienteEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consulta_entity_1.ConsultaEntity, (consulta) => consulta.paciente),
    __metadata("design:type", Array)
], PacienteEntity.prototype, "consultas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consulta_entity_1.ConsultaEntity, (cuenta) => cuenta.paciente),
    __metadata("design:type", Array)
], PacienteEntity.prototype, "cuentas", void 0);
PacienteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pacientes' })
], PacienteEntity);
exports.PacienteEntity = PacienteEntity;
//# sourceMappingURL=paciente.entity.js.map