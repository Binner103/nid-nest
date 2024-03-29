import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreateModule } from './modules/create/user-create.module';
import { UserEntity } from './entities/user.entity';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';
import { UserSaga } from './sagas/user.saga';
import { UserShowModule } from './modules/show/user-show.module';
import { UserNotExistValidator } from './validators/user-not-exist.validator';
import { UserExistQueryHandler } from './queries/user-exist.query.handler';
import { UserUpdateModule } from './modules/update/user-update.module';

@Module({
  imports: [
    UserCreateModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserShowModule,
    UserUpdateModule,
  ],
  exports: [TypeOrmModule],
  providers: [
    UserEntitySubscriber,
    UserSaga,
    UserNotExistValidator,
    UserExistQueryHandler,
  ],
})
export class UserModule {}
