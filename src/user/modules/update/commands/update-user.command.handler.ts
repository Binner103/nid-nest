import * as bcrypt from 'bcrypt';
import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { UpdateUserCommand } from './update-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRpository: Repository<UserEntity>,
  ) {}

  async execute(command: UpdateUserCommand) {
    const { userId, validate, update } = command.params;

    // 查询用户数据
    const userQueryBuilder = this.userRpository
      .createQueryBuilder('user')
      .select([
        'user.id AS id',
        'user.name AS name',
        'user.password AS password',
      ]);

    // 查询用户
    const user = await userQueryBuilder
      .where('user.id = :userId', { userId })
      .getRawOne();

    if (!user) {
      throw new NotFoundException('没找到要更新的用户');
    }

    // 检查密码是否匹配
    const isPasswordMatches = await bcrypt.compare(
      validate.password,
      user.password,
    );

    if (!isPasswordMatches) {
      throw new BadRequestException('密码不对');
    }
    return command;
  }
}
