import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteEntity } from './paciente.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PacienteEntity])],
  providers: [PacienteService],
  controllers: [PacienteController],
  exports: [PacienteService]
})
export class PacienteModule {}
