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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const paciente_dto_1 = require("./dto/paciente.dto");
const paciente_service_1 = require("./paciente.service");
let PacienteController = class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    async getAll() {
        return await this.pacienteService.getAll();
    }
    async getOne(cedula) {
        return await this.pacienteService.findById(cedula);
    }
    async create(dto) {
        return await this.pacienteService.create(dto);
    }
    async update(cedula, dto) {
        return await this.pacienteService.update(cedula, dto);
    }
    async delete(cedula) {
        return await this.pacienteService.delete(cedula);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':cedula'),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paciente_dto_1.PacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':cedula'),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, paciente_dto_1.PacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':cedula'),
    __param(0, (0, common_1.Param)('cedula', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "delete", null);
PacienteController = __decorate([
    (0, common_1.Controller)('paciente'),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteController);
exports.PacienteController = PacienteController;
//# sourceMappingURL=paciente.controller.js.map