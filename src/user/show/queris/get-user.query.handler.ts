import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(query: GetUserQuery) {
    const { id } = query.params;
    return `query user: ${id}`;
  }
}
