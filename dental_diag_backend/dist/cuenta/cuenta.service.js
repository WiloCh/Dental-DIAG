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
exports.CuentaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const paciente_service_1 = require("../paciente/paciente.service");
const tratamiento_service_1 = require("../tratamiento/tratamiento.service");
const cuenta_entity_1 = require("./cuenta.entity");
const cuenta_repository_1 = require("./cuenta.repository");
let CuentaService = class CuentaService {
    constructor(cuentaRepository, pacienteService, tratamientoService) {
        this.cuentaRepository = cuentaRepository;
        this.pacienteService = pacienteService;
        this.tratamientoService = tratamientoService;
    }
    async getAll() {
        const list = await this.cuentaRepository.find({ relations: ['tratamiento', 'paciente'] });
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Cuentas Vacia'));
        }
        return list;
    }
    async findById(id) {
        const cuenta = await this.cuentaRepository.findOne({ id });
        if (!cuenta) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('La cuenta no Existe'));
        }
        return cuenta;
    }
    async create(dto) {
        const paciente = await this.pacienteService.findById(dto.paciente);
        const tratamiento = await this.tratamientoService.findById(dto.tratamiento);
        const cuenta = this.cuentaRepository.create(Object.assign(Object.assign({}, dto), { paciente: paciente, tratamiento: tratamiento }));
        await this.cuentaRepository.save(cuenta);
        return new message_dto_1.MessageDto('Cuenta Creada');
    }
    async update(id, dto) {
        const paciente = await this.pacienteService.findById(dto.paciente);
        const tratamiento = await this.tratamientoService.findById(dto.tratamiento);
        const cuenta = await this.findById(id);
        if (!cuenta)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Cuenta no Existente'));
        dto.descripcion ? cuenta.descripcion = dto.descripcion : cuenta.descripcion = cuenta.descripcion;
        dto.paciente ? paciente.id = dto.paciente : paciente.id = paciente.id;
        dto.tratamiento ? tratamiento.id = dto.tratamiento : tratamiento.id = tratamiento.id;
        await this.cuentaRepository.save(cuenta);
        return new message_dto_1.MessageDto('Cuenta actualizada');
    }
    async delete(id) {
        const cuenta = await this.findById(id);
        await this.cuentaRepository.delete(cuenta);
        return new message_dto_1.MessageDto('Cuenta Eliminada');
    }
};
CuentaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cuenta_entity_1.CuentaEntity)),
    __metadata("design:paramtypes", [cuenta_repository_1.CuentaRepository,
        paciente_service_1.PacienteService,
        tratamiento_service_1.TratamientoService])
], CuentaService);
exports.CuentaService = CuentaService;
//# sourceMappingURL=cuenta.service.js.map