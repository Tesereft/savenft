import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/blockchain')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:address')
  getHello(@Param() params): Promise<any> {
    return this.appService.getCollectionNFTListFromBlockchain(params.address);
  }
}
