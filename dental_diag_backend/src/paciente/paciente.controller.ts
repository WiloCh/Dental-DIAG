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

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.pacienteService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: PacienteDto) {
        return await this.pacienteService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: PacienteDto) {
        return await this.pacienteService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.pacienteService.delete(id);
    }
}
