import { Controller, Patch } from '@nestjs/common';

@Controller()
export class UserUpdateController {
  @Patch('users/:userId')
  updateUser() {
    return 'updateUser';
  }
}
