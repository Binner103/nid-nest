import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { CreateJwtCommand } from './create-jwt.command';

@CommandHandler(CreateJwtCommand)
export class CreateJwtCommandHandler
  implements ICommandHandler<CreateJwtCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly jwtService: JwtService,
  ) {}

  async execute(command: CreateJwtCommand) {
    const accessToken = this.jwtService.sign(command.params);
    return accessToken;
  }
}
