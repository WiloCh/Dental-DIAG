import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TratamientoDto } from './dto/tratamiento.dto';
import { TratamientoService } from './tratamiento.service';

@Controller('tratamiento')
export class TratamientoController {
    constructor(private readonly tratamientoService: TratamientoService) {}

    @Get()
    async getAll() {
        return await this.tratamientoService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.tratamientoService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: TratamientoDto) {
        return await this.tratamientoService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: TratamientoDto) {
        return await this.tratamientoService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.tratamientoService.delete(id);
    }
}
