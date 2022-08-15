import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaEntity } from './consulta.entity';
import { MedicoEntity } from 'src/medico/medico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultaEntity, MedicoEntity])],
  providers: [ConsultaService],
  controllers: [ConsultaController]
})
export class ConsultaModule {}
