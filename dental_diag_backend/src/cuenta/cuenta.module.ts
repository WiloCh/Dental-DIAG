import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';

@Module({
  providers: [CuentaService],
  controllers: [CuentaController]
})
export class CuentaModule {}
