import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'avatar' })
export class AvatarEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  mimetype: string;

  @Column()
  filename: string;

  @Column()
  size: number;

  @Column()
  userId: number;

  /**
   * 关系
   */
  @OneToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: UserEntity;
}
