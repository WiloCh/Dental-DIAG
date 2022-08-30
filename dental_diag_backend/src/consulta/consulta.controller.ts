import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaDto } from './dto/consulta.dto';

@Controller('consulta')
export class ConsultaController {

    constructor(private readonly consultaService: ConsultaService) {}

    @Get()
    async getAll() {
        return await this.consultaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.consultaService.findById(id);
    }
    
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: ConsultaDto) {
        return await this.consultaService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ConsultaDto) {
        return await this.consultaService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.consultaService.delete(id);
    }
}
