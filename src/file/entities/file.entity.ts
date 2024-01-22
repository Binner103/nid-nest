import {
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
