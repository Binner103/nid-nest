import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
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
