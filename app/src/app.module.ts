import { Module } from '@nestjs/common';
import { ExternalModule } from './external/external.module';
import { AxiosModule } from '@schealex/nestjs-httpservice-test-lib/src';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {HttpServiceInterceptor} from "./common/http-service.interceptor";

@Module({
  imports: [
      AxiosModule,
      ExternalModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpServiceInterceptor,
    },
  ]
})
export class AppModule {}
