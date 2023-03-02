import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(query: GetUserQuery) {
    const { id } = query.params;
    // return this.userRepository.findOneBy({ id });
    return this.userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.name'])
      .where('user.id = :userId', { userId: id })
      .getOne();
  }
}
