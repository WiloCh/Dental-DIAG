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
exports.TratamientoController = void 0;
const common_1 = require("@nestjs/common");
const tratamiento_dto_1 = require("./dto/tratamiento.dto");
const tratamiento_service_1 = require("./tratamiento.service");
let TratamientoController = class TratamientoController {
    constructor(tratamientoService) {
        this.tratamientoService = tratamientoService;
    }
    async getAll() {
        return await this.tratamientoService.getAll();
    }
    async getOne(id) {
        return await this.tratamientoService.findById(id);
    }
    async create(dto) {
        return await this.tratamientoService.create(dto);
    }
    async update(id, dto) {
        return await this.tratamientoService.update(id, dto);
    }
    async delete(id) {
        return await this.tratamientoService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TratamientoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TratamientoController.prototype, "getOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tratamiento_dto_1.TratamientoDto]),
    __metadata("design:returntype", Promise)
], TratamientoController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tratamiento_dto_1.TratamientoDto]),
    __metadata("design:returntype", Promise)
], TratamientoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TratamientoController.prototype, "delete", null);
TratamientoController = __decorate([
    (0, common_1.Controller)('tratamiento'),
    __metadata("design:paramtypes", [tratamiento_service_1.TratamientoService])
], TratamientoController);
exports.TratamientoController = TratamientoController;
//# sourceMappingURL=tratamiento.controller.js.map