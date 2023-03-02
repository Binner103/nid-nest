import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class UserNotExistValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    return false;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return '用户已存在';
  }
}

export const UserNotExist = (options?: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      validator: UserNotExistValidator,
    });
  };
};
