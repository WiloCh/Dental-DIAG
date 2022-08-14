import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PacienteDto } from './dto/paciente.dto';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {

    constructor(private readonly pacienteService: PacienteService) {}

    @Get()
    async getAll() {
        return await this.pacienteService.getAll();
    }

    @Get(':cedula')
    async getOne(@Param('cedula', ParseIntPipe) cedula: number) {
        return await this.pacienteService.findById(cedula);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: PacienteDto) {
        return await this.pacienteService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':cedula')
    async update(@Param('cedula', ParseIntPipe) cedula: number, @Body() dto: PacienteDto) {
        return await this.pacienteService.update(cedula, dto);
    }

    @Delete(':cedula')
    async delete(@Param('cedula', ParseIntPipe) cedula: number) {
        return await this.pacienteService.delete(cedula);
    }
}
