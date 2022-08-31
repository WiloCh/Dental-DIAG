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
const medico_service_1 = require("../medico/medico.service");
const paciente_service_1 = require("../paciente/paciente.service");
const consulta_entity_1 = require("./consulta.entity");
const consulta_repository_1 = require("./consulta.repository");
let ConsultaService = class ConsultaService {
    constructor(consultaRepository, medicoService, pacienteService) {
        this.consultaRepository = consultaRepository;
        this.medicoService = medicoService;
        this.pacienteService = pacienteService;
    }
    async getAll() {
        const list = await this.consultaRepository.find({ relations: ['medico', 'paciente'] });
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Consultas Vacia'));
        }
        return list;
    }
    async findById(id) {
        const consulta = await this.consultaRepository.findOne(id);
        if (!consulta) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('La consulta no Existe'));
        }
        return consulta;
    }
    async create(dto) {
        const medico = await this.medicoService.findById(dto.medico);
        const paciente = await this.pacienteService.findById(dto.paciente);
        const consulta = this.consultaRepository.create(Object.assign(Object.assign({}, dto), { medico: medico, paciente: paciente }));
        await this.consultaRepository.save(consulta);
        return new message_dto_1.MessageDto('Consulta Creada');
    }
    async update(id, dto) {
        const consulta = await this.findById(id);
        if (!consulta)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Consulta no Existente'));
        const mergeData = this.consultaRepository.merge(consulta, Object.assign(Object.assign({}, dto), { medico: consulta.medico, paciente: consulta.paciente }));
        await this.consultaRepository.save(mergeData);
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
    __metadata("design:paramtypes", [consulta_repository_1.ConsultaRepository,
        medico_service_1.MedicoService,
        paciente_service_1.PacienteService])
], ConsultaService);
exports.ConsultaService = ConsultaService;
//# sourceMappingURL=consulta.service.js.map