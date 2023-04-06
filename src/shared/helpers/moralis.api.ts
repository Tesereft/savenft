import axios, { AxiosResponse } from 'axios';

export class MoralisAPI {
  private apiKey = process.env.API_KEY || 'API';

  getAllNFTSfromAddress = async (address: string): Promise<AxiosResponse> => {
    return await axios.get(
      'https://deep-index.moralis.io/api/v2/nft/' +
        address +
        '?chain=eth&format=decimal&media_items=false',
      {
        headers: {
          'X-API-Key': this.apiKey,
        },
      },
    );
  };
}
