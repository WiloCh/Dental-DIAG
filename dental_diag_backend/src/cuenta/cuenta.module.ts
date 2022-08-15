import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaEntity } from './cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentaEntity])],
  providers: [CuentaService],
  controllers: [CuentaController]
})
export class CuentaModule {}
