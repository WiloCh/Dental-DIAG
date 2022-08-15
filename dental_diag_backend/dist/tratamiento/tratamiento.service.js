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
exports.TratamientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
const tratamiento_entity_1 = require("./tratamiento.entity");
const tratamiento_repository_1 = require("./tratamiento.repository");
let TratamientoService = class TratamientoService {
    constructor(tratamientoRepository) {
        this.tratamientoRepository = tratamientoRepository;
    }
    async getAll() {
        const list = await this.tratamientoRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Lista de Tratamientos Vacia'));
        }
        return list;
    }
    async findById(id) {
        const tratamiento = await this.tratamientoRepository.findOneBy({ id });
        if (!tratamiento) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('Tratamientos no Existente'));
        }
        return tratamiento;
    }
    async findByNombre(nombre) {
        const tratamiento = await this.tratamientoRepository.findOneBy({ nombre: nombre });
        return tratamiento;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.nombre);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Ese Nombre ya Existe'));
        const tratamiento = this.tratamientoRepository.create(dto);
        await this.tratamientoRepository.save(tratamiento);
        return new message_dto_1.MessageDto('Tratamiento Creado');
    }
    async update(id, dto) {
        const tratamiento = await this.findById(id);
        if (!tratamiento)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Tratamientos no Existente'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('Ese Nombre ya Existe'));
        dto.nombre ? tratamiento.nombre = dto.nombre : tratamiento.nombre = tratamiento.nombre;
        await this.tratamientoRepository.save(tratamiento);
        return new message_dto_1.MessageDto('Tratamiento actualizados');
    }
    async delete(id) {
        const tratamiento = await this.findById(id);
        await this.tratamientoRepository.delete(tratamiento);
        return new message_dto_1.MessageDto('Tratamiento se Elimino');
    }
};
TratamientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tratamiento_entity_1.TratamientoEntity)),
    __metadata("design:paramtypes", [tratamiento_repository_1.TratamientoRepository])
], TratamientoService);
exports.TratamientoService = TratamientoService;
//# sourceMappingURL=tratamiento.service.js.map