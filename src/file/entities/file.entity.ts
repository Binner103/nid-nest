import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  originalname: string;

  @Column()
  mimetype: string;

  @Column()
  filename: string;

  @Column()
  size: number;

  @Column()
  postId: number;

  @Column()
  userId: number;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true, type: 'json' })
  metadata: number;

  // 关系
  @ManyToOne(() => UserEntity, (user) => user.files, { onDelete: 'CASCADE' })
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.files, { onDelete: 'CASCADE' })
  post: PostEntity;
}
