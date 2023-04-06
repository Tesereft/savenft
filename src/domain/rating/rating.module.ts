import { Module } from '@nestjs/common';
import { RateController } from './rating.controller';
import { RateService } from './rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection, Rate } from '@/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Rate, Collection])],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
