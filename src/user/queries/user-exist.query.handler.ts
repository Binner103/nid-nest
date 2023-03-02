import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserExistQuery } from './user-exist.query';

@QueryHandler(UserExistQuery)
export class UserExistQueryHandler implements IQueryHandler<UserExistQuery> {
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(query: UserExistQuery) {
    const { name } = query.params;

    const result = await this.userRepository.find({
      where: { name },
      select: ['id'],
    });
    return result.length > 0;
  }
}
