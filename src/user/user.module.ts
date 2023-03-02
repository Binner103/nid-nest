import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreateModule } from './modules/create/user-create.module';
import { UserEntity } from './entities/user.entity';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';
import { UserSaga } from './sagas/user.saga';
import { UserShowModule } from './modules/show/user-show.module';
import { UserNotExistValidator } from './validators/user-not-exist.validator';

@Module({
  imports: [
    UserCreateModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserShowModule,
  ],
  exports: [TypeOrmModule],
  providers: [UserEntitySubscriber, UserSaga, UserNotExistValidator],
})
export class UserModule {}
