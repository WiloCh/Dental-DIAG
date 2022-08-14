import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { MedicoDto } from './dto/medico.dto';
import { MedicoService } from './medico.service';

@Controller('medico')
export class MedicoController {

    constructor(private readonly medicoService: MedicoService) {}

    @Get()
    async getAll() {
        return await this.medicoService.getAll();
    }

    @Get(':cedula')
    async getOne(@Param('cedula', ParseIntPipe) cedula: number) {
        return await this.medicoService.findById(cedula);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: MedicoDto) {
        return await this.medicoService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':cedula')
    async update(@Param('cedula', ParseIntPipe) cedula: number, @Body() dto: MedicoDto) {
        return await this.medicoService.update(cedula, dto);
    }

    @Delete(':cedula')
    async delete(@Param('cedula', ParseIntPipe) cedula: number) {
        return await this.medicoService.delete(cedula);
    }
}
