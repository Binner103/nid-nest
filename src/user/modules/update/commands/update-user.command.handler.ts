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
    const userQueryBuilder = this.userRpository.createQueryBuilder('user');

    // 查询用户
    const user = await userQueryBuilder
      .where('user.id = :userId', { userId })
      .getOne();

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

    /**
     * 更新用户名
     */
    if (update.name) {
      if (user.name == update.name) {
        throw new BadRequestException('要更新的用户名与当前用户名相同');
      }

      // 检查用户名是否被占用
      const hasUser = await userQueryBuilder
        .where('user.name = :name', { name: update.name })
        .getCount();

      if (hasUser) {
        throw new BadRequestException('用户名已存在');
      }

      // 保存用户名修改
      user.name = update.name;
      await this.userRpository.save(user);
    }
    return {
      message: '成功更新了用户',
    };
  }
}
