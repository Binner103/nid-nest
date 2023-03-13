import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { Repository } from 'typeorm';
import { GetUserQuery } from './get-user.query';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(query: GetUserQuery) {
    const { id } = query.params;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .select(['user.id AS id', 'user.name AS name'])
      .addSelect('IF(COUNT(avatar.id), 1, NULL)', 'avatar')
      .leftJoin('user.avatar', 'avatar')
      .where('user.id = :userId', { userId: id })
      .getRawOne();

    if (!user.id) {
      throw new NotFoundException('没找到用户');
    }
    return user;
  }
}
