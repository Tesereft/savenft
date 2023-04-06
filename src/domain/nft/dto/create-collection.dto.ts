import { INFTMetadata } from '@/shared/types/nft-metadata.typing';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsArray()
  @IsNotEmpty()
  nfts: INFTMetadata[];
}
