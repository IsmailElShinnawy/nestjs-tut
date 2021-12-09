import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return 'created cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns ${id} cat`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsService.findAll();
    throw new HttpException('Forbidden Access', HttpStatus.FORBIDDEN);
  }
}
