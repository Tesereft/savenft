import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RateService } from './rating.service';
import { CreateRatingDto } from './dto/create-rate.dto';

@Controller('/rating')
export class RateController {
  constructor(private readonly ratingService: RateService) {}

  @Post('/')
  async create(@Body() userDTO: CreateRatingDto) {
    return this.ratingService.create(userDTO);
  }

  @Get('/')
  async findById(@Query() query) {
    return this.ratingService.findAllBy(query.id);
  }
}
