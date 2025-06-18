import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';
import { Request } from 'express';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): User => {
    const req = context.switchToHttp().getRequest<Request>();

    return req.user as User;
  },
);
