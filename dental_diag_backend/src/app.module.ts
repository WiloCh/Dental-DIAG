import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { MedicoModule } from './medico/medico.module';
import { PacienteModule } from './paciente/paciente.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { ConsultaController } from './consulta/consulta.controller';
import { ConsultaModule } from './consulta/consulta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
        //Incluido
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    ProductoModule,
    UsuarioModule,
    RolModule,
    AuthModule,
    MedicoModule,
    PacienteModule,
    TratamientoModule,
    CuentaModule,
    ConsultaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
