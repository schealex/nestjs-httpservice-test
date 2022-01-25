import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';

/**
 * Interceptor class to pass on authorization header from incoming request to outgoing requests
 */
@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  constructor(
    private httpService: HttpService
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const token = ctx.getRequest().headers['authorization'];

    if (token) {
      this.httpService.axiosRef.defaults.headers[
        'Authorization'
        ] = token;
    }
    return next.handle().pipe();
  }
}
