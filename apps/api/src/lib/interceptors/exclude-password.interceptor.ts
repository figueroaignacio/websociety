import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((item) => this.excludePasswordField(item));
        } else {
          return this.excludePasswordField(data);
        }
      }),
    );
  }

  private excludePasswordField(user: any) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
