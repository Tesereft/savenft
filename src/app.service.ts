import { Injectable } from '@nestjs/common';
import { MoralisAPI } from './shared/helpers/moralis.api';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private readonly moralisApi: MoralisAPI;

  constructor() {
    this.moralisApi = new MoralisAPI();
  }

  async getCollectionNFTListFromBlockchain(
    collectionAddress: string,
  ): Promise<AxiosResponse> {
    const { data } = await this.moralisApi.getAllNFTSfromAddress(
      collectionAddress,
    );
    const { result } = data;
    const filtered = result.map((nft: any) => {
      nft.metadata = JSON.parse(nft.metadata);
      return nft;
    });
    return filtered;
  }
}
