import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns ${id} cat`;
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }
}
