import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Action } from '../providers/app-ability.factory';

export class CheckUserAccessDto {
  @IsNotEmpty()
  @IsString()
  resourceType: string;

  @IsNotEmpty()
  @IsNumber()
  resourceId: number;

  @IsNotEmpty()
  @IsNumber()
  resourceUserId: number;

  @IsOptional()
  resourceStatus?: any;

  @IsEnum(Action)
  action: Action;
}
