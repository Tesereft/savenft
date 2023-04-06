import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Controller('/collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post('/')
  async create(@Body() collectionDTO: CreateCollectionDto) {
    return this.collectionService.create(collectionDTO);
  }

  @Get('/')
  async findById(@Query() query) {
    const results = await this.collectionService.findOne(query.id);
    const nftFiltered = results.nfts.map((nft) => {
      nft.selected = false;
      return nft;
    });
    results.nfts = nftFiltered;
    return results;
  }
}
