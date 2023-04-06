import { Attributes } from './nft-attributes.typings';

export class INFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Attributes[];
}
