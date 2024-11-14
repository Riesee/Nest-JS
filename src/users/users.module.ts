import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes(
        {
          method: RequestMethod.GET,
          path: 'users',
        },
        {
          method: RequestMethod.GET,
          path: 'users/:id',
        },
      )
      .apply(AnotherMiddleware)
      .forRoutes(
        {
          method: RequestMethod.GET,
          path: 'users',
        },
        {
          method: RequestMethod.GET,
          path: 'users/:id',
        },
      );
  }
}
