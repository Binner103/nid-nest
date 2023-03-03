import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { ValidateUserCredentialCommand } from './validate-user-credential.command';

@CommandHandler(ValidateUserCredentialCommand)
export class ValidateUserCredentialCommandHandler
  implements ICommandHandler<ValidateUserCredentialCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: ValidateUserCredentialCommand) {
    const { name, password } = command.params;

    const [user] = await this.userRepository.find({ where: { name } });

    if (!user) {
      throw new BadRequestException('没找到用户');
    }

    const isPasswordMatches = await bcrypt.compare(password, user.password);

    if (!isPasswordMatches) {
      throw new BadRequestException('密码不对');
    }
    return user;
  }
}
