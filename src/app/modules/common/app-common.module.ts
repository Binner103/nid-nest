import { Global, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [CqrsModule],
  exports: [CqrsModule],
  providers: [
    {
      provide: APP_PIPE,
      useFactory() {
        return new ValidationPipe({
          whitelist: true,
          stopAtFirstError: true,
        });
      },
    },
  ],
})
export class AppCommonModule {}
