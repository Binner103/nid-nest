import { Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';

@Controller('users')
export class UserCreateController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  createUser() {
    return this.commandBus.execute(
      new CreateUserCommand({ name: 'hongbin', password: '123123' }),
    );
  }
}
