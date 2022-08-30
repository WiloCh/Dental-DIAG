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
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const medico_entity_1 = require("./medico.entity");
const medico_repository_1 = require("./medico.repository");
let MedicoService = class MedicoService {
    constructor(medicoRepository) {
        this.medicoRepository = medicoRepository;
    }
    async getAll() {
        const list = await this.medicoRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Medicos esta Vacia'));
        }
        return list;
    }
    async findById(id) {
        const medico = await this.medicoRepository.findOneBy({ id });
        if (!medico) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('El Medico no Existe'));
        }
        return medico;
    }
    async create(dto) {
        const medico = this.medicoRepository.create(dto);
        await this.medicoRepository.save(medico);
        return new message_dto_1.MessageDto('Medico Agregado');
    }
    async update(id, dto) {
        const medico = await this.findById(id);
        if (!medico)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('El Medico no existente'));
        dto.nombre ? medico.nombre = dto.nombre : medico.nombre = medico.nombre;
        dto.celular ? medico.celular = dto.celular : medico.celular = medico.celular;
        dto.especialidad ? medico.especialidad = dto.especialidad : medico.especialidad = medico.especialidad;
        await this.medicoRepository.save(medico);
        return new message_dto_1.MessageDto('Datos del Medico actualizados');
    }
    async delete(id) {
        const medico = await this.findById(id);
        await this.medicoRepository.delete(medico);
        return new message_dto_1.MessageDto('Medico fue Eliminado');
    }
};
MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medico_entity_1.MedicoEntity)),
    __metadata("design:paramtypes", [medico_repository_1.MedicoRepository])
], MedicoService);
exports.MedicoService = MedicoService;
//# sourceMappingURL=medico.service.js.map