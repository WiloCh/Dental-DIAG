"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaModule = void 0;
const common_1 = require("@nestjs/common");
const consulta_service_1 = require("./consulta.service");
const consulta_controller_1 = require("./consulta.controller");
const typeorm_1 = require("@nestjs/typeorm");
const consulta_entity_1 = require("./consulta.entity");
const medico_module_1 = require("../medico/medico.module");
const paciente_module_1 = require("../paciente/paciente.module");
let ConsultaModule = class ConsultaModule {
};
ConsultaModule = __decorate([
    (0, common_1.Module)({
        imports: [medico_module_1.MedicoModule, paciente_module_1.PacienteModule, typeorm_1.TypeOrmModule.forFeature([consulta_entity_1.ConsultaEntity])],
        providers: [consulta_service_1.ConsultaService],
        controllers: [consulta_controller_1.ConsultaController]
    })
], ConsultaModule);
exports.ConsultaModule = ConsultaModule;
//# sourceMappingURL=consulta.module.js.map