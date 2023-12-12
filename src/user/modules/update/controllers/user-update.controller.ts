import { Body, Controller, Patch } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller()
export class UserUpdateController {
	@Patch('users/:userId')
	updateUser(@Body() body: UpdateUserDto) {
		return 'updateUser';
	}
}
