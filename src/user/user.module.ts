import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreateModule } from './create/user-create.module';
import { UserEntity } from './entities/user.entity';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';
import { UserSaga } from './sagas/user.saga';
import { UserShowModule } from './show/user-show.module';

@Module({
  imports: [
    UserCreateModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserShowModule,
  ],
  exports: [TypeOrmModule],
  providers: [UserEntitySubscriber, UserSaga],
})
export class UserModule {}
