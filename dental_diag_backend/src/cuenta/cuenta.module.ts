import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaEntity } from './cuenta.entity';
import { PacienteModule } from 'src/paciente/paciente.module';
import { TratamientoModule } from 'src/tratamiento/tratamiento.module';

@Module({
  imports: [PacienteModule, TratamientoModule,TypeOrmModule.forFeature([CuentaEntity])],
  providers: [CuentaService],
  controllers: [CuentaController]
})
export class CuentaModule {}
