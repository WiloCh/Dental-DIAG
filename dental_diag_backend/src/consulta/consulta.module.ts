import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';

@Module({
  providers: [ConsultaService],
  controllers: [ConsultaController]
})
export class ConsultaModule {}
