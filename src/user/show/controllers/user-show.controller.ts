import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UserShowController {
  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return `user: ${userId}`;
  }
}
