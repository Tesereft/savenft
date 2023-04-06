import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from '@/shared/entities';
import { Repository } from 'typeorm';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
  ) {}

  async findAll(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }

  async findOne(id: number): Promise<Collection> {
    return this.collectionRepository.findOne({ where: { id: id } });
  }

  async create(collectionDTO: CreateCollectionDto) {
    return this.collectionRepository.save(collectionDTO);
  }

  async update(
    id: number,
    collectionDTO: UpdateCollectionDto,
  ): Promise<Collection> {
    const collection = await this.collectionRepository.findOne({
      where: { id: id },
    });
    if (!collection) {
      throw new NotFoundException('Collection has not been found');
    }
    await this.collectionRepository.update(id, collectionDTO);
    return this.collectionRepository.findOne({ where: { id: id } });
  }
}
