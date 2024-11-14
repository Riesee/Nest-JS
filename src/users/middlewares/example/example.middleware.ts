import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("example middleware");
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException('Authorization header is missing', 401);
    }
    if (authorization !== 'Bearer my-jwt-token') {
      throw new HttpException('Authorization header is invalid', 401);
    }
    next();
  }
}
