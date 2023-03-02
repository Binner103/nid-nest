import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user.module';
import { UserShowController } from './controllers/user-show.controller';
import { GetUserQueryHandler } from './queris/get-user.query.handler';

@Module({
  controllers: [UserShowController],
  providers: [GetUserQueryHandler],
  imports: [forwardRef(() => UserModule)],
})
export class UserShowModule {}
