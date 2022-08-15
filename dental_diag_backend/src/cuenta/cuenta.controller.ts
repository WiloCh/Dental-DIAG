import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaDto } from './dto/cuenta.dto';

@Controller('cuenta')
export class CuentaController {

    constructor(private readonly cuentaService: CuentaService) {}

    @Get()
    async getAll() {
        return await this.cuentaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.cuentaService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: CuentaDto) {
        return await this.cuentaService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CuentaDto) {
        return await this.cuentaService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.cuentaService.delete(id);
    }

}
