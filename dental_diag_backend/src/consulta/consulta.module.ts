import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaEntity } from './consulta.entity';
import { MedicoEntity } from 'src/medico/medico.entity';
import { MedicoModule } from 'src/medico/medico.module';
import { PacienteModule } from 'src/paciente/paciente.module';

@Module({
  imports: [MedicoModule, PacienteModule,TypeOrmModule.forFeature([ConsultaEntity])],
  providers: [ConsultaService],
  controllers: [ConsultaController]
})
export class ConsultaModule {}
