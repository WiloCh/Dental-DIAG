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
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const medico_entity_1 = require("../medico/medico.entity");
const medico_repository_1 = require("../medico/medico.repository");
const consulta_entity_1 = require("./consulta.entity");
const consulta_repository_1 = require("./consulta.repository");
let ConsultaService = class ConsultaService {
    constructor(consultaRepository, medicoRepository) {
        this.consultaRepository = consultaRepository;
        this.medicoRepository = medicoRepository;
    }
    async getAll() {
        const list = await this.consultaRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Consultas Vacia'));
        }
        return list;
    }
    async findById(id) {
        const consulta = await this.consultaRepository.findOneBy({ id });
        if (!consulta) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('La consulta no Existe'));
        }
        return consulta;
    }
    async findByMed_Id(cedula) {
        const medico = await this.medicoRepository.findOneBy({ cedula });
        if (!medico) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('El Medico no Existe'));
        }
        return medico;
    }
    async findByMotivo(motivo) {
        const consulta = await this.consultaRepository.findOneBy({ motivo: motivo });
        return consulta;
    }
    async create(dto) {
        const exists = await this.findByMotivo(dto.motivo);
        const consulta = this.consultaRepository.create(dto);
        await this.consultaRepository.save(consulta);
        return new message_dto_1.MessageDto('Consulta Creada');
    }
    async update(id, dto) {
        const consulta = await this.findById(id);
        if (!consulta)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Consulta no Existente'));
        dto.fecha ? consulta.fecha = dto.fecha : consulta.fecha = consulta.fecha;
        dto.motivo ? consulta.motivo = dto.motivo : consulta.motivo = consulta.motivo;
        dto.medico ? consulta.medico = dto.medico : consulta.medico = consulta.medico;
        dto.paciente ? consulta.paciente = dto.paciente : consulta.paciente = consulta.paciente;
        await this.consultaRepository.save(consulta);
        return new message_dto_1.MessageDto('Consulta actualizada');
    }
    async delete(id) {
        const consulta = await this.findById(id);
        await this.consultaRepository.delete(consulta);
        return new message_dto_1.MessageDto('Consulta Eliminada');
    }
};
ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consulta_entity_1.ConsultaEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(medico_entity_1.MedicoEntity)),
    __metadata("design:paramtypes", [consulta_repository_1.ConsultaRepository,
        medico_repository_1.MedicoRepository])
], ConsultaService);
exports.ConsultaService = ConsultaService;
//# sourceMappingURL=consulta.service.js.map