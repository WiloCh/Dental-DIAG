import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TratamientoEntity } from './tratamiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TratamientoEntity])],
  providers: [TratamientoService],
  controllers: [TratamientoController],
  exports:[TratamientoService]
})
export class TratamientoModule {}
