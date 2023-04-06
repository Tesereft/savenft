import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rate.dto';
import { Rate } from '@/shared/entities/rate.entity';
import { Collection } from '@/shared/entities';

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private readonly ratingRepository: Repository<Rate>,

    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
  ) {}

  async findAll(): Promise<Rate[]> {
    return this.ratingRepository.find();
  }

  async findAllBy(id: number) {
    return this.ratingRepository.find({ where: { collectionId: id } });
  }

  async create(ratingDTO: CreateRatingDto) {
    const foundCollection = await this.collectionRepository.findOne({
      where: { id: ratingDTO.collectionId },
    });

    const foundRatings = await this.findAllBy(ratingDTO.collectionId);

    let sum = foundRatings.reduce((a, b) => a + b.rate, 0);

    sum += ratingDTO.rate;
    sum += foundCollection.rate;

    if (sum !== 0) {
      foundCollection.rate = sum / (foundRatings.length + 2);
    }

    this.collectionRepository.save(foundCollection);

    return this.ratingRepository.save(ratingDTO);
  }
}
