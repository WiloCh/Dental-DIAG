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
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const paciente_entity_1 = require("./paciente.entity");
const paciente_repository_1 = require("./paciente.repository");
let PacienteService = class PacienteService {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async getAll() {
        const list = await this.pacienteRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Pacientes esta Vacia'));
        }
        return list;
    }
    async findById(id) {
        const paciente = await this.pacienteRepository.findOneBy({ id });
        if (!paciente) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('El Paciente no Existe'));
        }
        return paciente;
    }
    async findByNombre(nombre) {
        const paciente = await this.pacienteRepository.findOneBy({ nombre: nombre });
        return paciente;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.nombre);
        const paciente = this.pacienteRepository.create(dto);
        await this.pacienteRepository.save(paciente);
        return new message_dto_1.MessageDto('Paciente Agregado');
    }
    async update(id, dto) {
        const paciente = await this.findById(id);
        if (!paciente)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('El Paciente no Existe'));
        dto.nombre ? paciente.nombre = dto.nombre : paciente.nombre = paciente.nombre;
        dto.edad ? paciente.edad = dto.edad : paciente.edad = paciente.edad;
        dto.sexo ? paciente.sexo = dto.sexo : paciente.sexo = paciente.sexo;
        dto.celular ? paciente.celular = dto.celular : paciente.celular = paciente.celular;
        dto.correo ? paciente.correo = dto.correo : paciente.correo = paciente.correo;
        await this.pacienteRepository.save(paciente);
        return new message_dto_1.MessageDto('Datos del Paciente actualizados');
    }
    async delete(id) {
        const paciente = await this.findById(id);
        await this.pacienteRepository.delete(paciente);
        return new message_dto_1.MessageDto('Paciente esta Eliminado');
    }
};
PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.PacienteEntity)),
    __metadata("design:paramtypes", [paciente_repository_1.PacienteRepository])
], PacienteService);
exports.PacienteService = PacienteService;
//# sourceMappingURL=paciente.service.js.map