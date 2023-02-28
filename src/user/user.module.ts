import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreateModule } from './create/user-create.module';
import { UserEntity } from './entities/user.entity';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';

@Module({
  imports: [UserCreateModule, TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  providers: [UserEntitySubscriber],
})
export class UserModule {}
