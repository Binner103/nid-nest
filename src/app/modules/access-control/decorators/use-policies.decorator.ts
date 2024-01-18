import { SetMetadata } from '@nestjs/common';
import { Policy } from '../types/policy.interface';

export const USE_POLICIES = 'use_policies';

export const UsePolicies = (...args: Array<Policy>) =>
  SetMetadata('USE_POLICIES', args);
