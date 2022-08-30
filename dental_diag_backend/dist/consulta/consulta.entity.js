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
exports.ConsultaEntity = void 0;
const medico_entity_1 = require("../medico/medico.entity");
const paciente_entity_1 = require("../paciente/paciente.entity");
const typeorm_1 = require("typeorm");
let ConsultaEntity = class ConsultaEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConsultaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], ConsultaEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 250, nullable: false }),
    __metadata("design:type", String)
], ConsultaEntity.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medico_entity_1.MedicoEntity, (medico) => medico.consultas),
    (0, typeorm_1.JoinColumn)({ name: 'id_medico' }),
    __metadata("design:type", medico_entity_1.MedicoEntity)
], ConsultaEntity.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.PacienteEntity, (paciente) => paciente.consultas),
    (0, typeorm_1.JoinColumn)({ name: 'id_paciente' }),
    __metadata("design:type", paciente_entity_1.PacienteEntity)
], ConsultaEntity.prototype, "paciente", void 0);
ConsultaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'consultas' })
], ConsultaEntity);
exports.ConsultaEntity = ConsultaEntity;
//# sourceMappingURL=consulta.entity.js.map