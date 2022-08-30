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

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.medicoService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: MedicoDto) {
        return await this.medicoService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: MedicoDto) {
        return await this.medicoService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.medicoService.delete(id);
    }
}
