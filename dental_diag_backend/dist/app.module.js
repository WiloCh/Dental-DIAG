"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const constants_1 = require("./config/constants");
const medico_module_1 = require("./medico/medico.module");
const paciente_module_1 = require("./paciente/paciente.module");
const consulta_module_1 = require("./consulta/consulta.module");
const tratamiento_module_1 = require("./tratamiento/tratamiento.module");
const cuenta_module_1 = require("./cuenta/cuenta.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    port: +configService.get(constants_1.DB_PORT),
                    username: configService.get(constants_1.DB_USER),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_DATABASE),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                    autoLoadEntities: true,
                }),
                inject: [config_1.ConfigService],
            }),
            medico_module_1.MedicoModule,
            paciente_module_1.PacienteModule,
            consulta_module_1.ConsultaModule,
            tratamiento_module_1.TratamientoModule,
            cuenta_module_1.CuentaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map