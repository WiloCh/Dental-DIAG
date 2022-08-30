"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TratamientoModule = void 0;
const common_1 = require("@nestjs/common");
const tratamiento_service_1 = require("./tratamiento.service");
const tratamiento_controller_1 = require("./tratamiento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tratamiento_entity_1 = require("./tratamiento.entity");
let TratamientoModule = class TratamientoModule {
};
TratamientoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tratamiento_entity_1.TratamientoEntity])],
        providers: [tratamiento_service_1.TratamientoService],
        controllers: [tratamiento_controller_1.TratamientoController],
        exports: [tratamiento_service_1.TratamientoService]
    })
], TratamientoModule);
exports.TratamientoModule = TratamientoModule;
//# sourceMappingURL=tratamiento.module.js.map