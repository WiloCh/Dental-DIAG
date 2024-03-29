import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoEntity } from './medico.entity';

@Module({
  imports:[TypeOrmModule.forFeature([MedicoEntity])],
  providers: [MedicoService],
  controllers: [MedicoController],
  exports: [MedicoService]
})
export class MedicoModule {}
