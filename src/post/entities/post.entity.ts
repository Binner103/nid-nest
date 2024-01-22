import { FileEntity } from 'src/file/entities/file.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PostStatus {
  draft = 'draft',
  published = 'published',
  archived = 'archived',
}

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({ type: 'longtext', nullable: true })
  content: string;

  @Column()
  userId: number;

  @Column({ type: 'enum', enum: PostStatus })
  status: PostStatus;

  /**
   * 关系
   */
  @ManyToOne(() => UserEntity, (user) => user.posts, { onDelete: 'CASCADE' })
  user: UserEntity;

  @OneToMany(() => FileEntity, (file) => file.post)
  files: Array<FileEntity>;
}
