import { UpdateUserDto } from "../dtos/update-user.dto";

export interface UpdateUserCommandParams extends UpdateUserDto {
	userId: number;
}

export class UpdateUserCommand {
	constructor(public readonly params: UpdateUserCommandParams) { }
}
