import { Type } from "class-transformer";
import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, Length, ValidateNested } from "class-validator";

export class UpdateUserValidateDto {
	@IsNotEmpty({ message: '$property 必须提供用户密码' })
	@Length(6, 24, { message: '$property 密码位数不对' })
	password: string;
}

export class UpdateUserUpdateDto {
	@IsString()
	@IsOptional()
	name?: string;

	@Length(6, 24, { message: '$property 密码位数不对' })
	@IsOptional()
	password?: string;
}

export class UpdateUserDto {
	@ValidateNested()
	@Type(() => UpdateUserValidateDto)
	@IsNotEmptyObject({ nullable: false }, { message: '请提供验证数据' })
	validate: UpdateUserValidateDto;

	@ValidateNested()
	@Type(() => UpdateUserUpdateDto)
	@IsNotEmptyObject({ nullable: false }, { message: '请提供更新数据' })
	update: UpdateUserUpdateDto;
}