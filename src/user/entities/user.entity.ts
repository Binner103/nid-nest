import { AvatarEntity } from 'src/avatar/entities/avatar.entity';
import { FileEntity } from 'src/file/entities/file.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name?: string;

  @Column()
  password?: string;

  /**
   * 关系
   */
  @OneToMany(() => AvatarEntity, (avatar) => avatar.user)
  avatar: Array<AvatarEntity>;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: Array<PostEntity>;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: Array<FileEntity>;
}
