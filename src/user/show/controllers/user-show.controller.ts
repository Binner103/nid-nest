import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUserQuery } from '../queris/get-user.query';

@Controller('users')
export class UserShowController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.queryBus.execute(new GetUserQuery({ id: userId }));
  }
}
