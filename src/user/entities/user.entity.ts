import { AvatarEntity } from 'src/avatar/entities/avatar.entity';
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
}
