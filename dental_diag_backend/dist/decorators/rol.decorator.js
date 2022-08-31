"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolDecorator = void 0;
const common_1 = require("@nestjs/common");
const RolDecorator = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.RolDecorator = RolDecorator;
//# sourceMappingURL=rol.decorator.js.map