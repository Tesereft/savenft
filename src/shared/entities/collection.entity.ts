import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { INFTMetadata } from '../types/nft-metadata.typing';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ type: 'jsonb' })
  nfts: any;

  @Column({ type: 'float', default: 5 })
  rate: number;
}
