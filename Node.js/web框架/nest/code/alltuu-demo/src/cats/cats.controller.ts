import { Controller, Param, Get, Post, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto, FindCats } from './cat.dto'


@Controller('cats')
export class CatsController {



  @Post() 
  async create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat`
  }

  @Get('/fd')
  findCats(@Query() query: FindCats) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    return `find this cats${query.name}`
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id)
    return `This action return a #${params.id}`
  }
  
  @Get()
  findAll() {
    // This endpoint will never get called
    // because the "/cats" request is going
    // to be captured by the "/cats/:id" route handler
    return `mysql FindAll`
  }
}
