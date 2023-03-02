import { IsNotEmpty, Length, Validate } from 'class-validator';
import { UserNotExistValidator } from 'src/user/validators/user-not-exist.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '请提供用户名' })
  @Validate(UserNotExistValidator)
  name: string;

  @Length(6, 24, { message: '密码长度不符合要求(6-24位之间)' })
  @IsNotEmpty({ message: '请提供用户密码' })
  password: string;
}
