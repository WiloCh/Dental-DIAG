"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constants_1 = require("./config/constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const configService = app.get(config_1.ConfigService);
    const port = +configService.get(constants_1.SERVE_PORT) || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map