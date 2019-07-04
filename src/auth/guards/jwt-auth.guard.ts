import {
  UnauthorizedException,
  Injectable,
  ExecutionContext,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    console.log(context, 'jwt授权对应的context')

    return super.canActivate(context)
  }

  handleRequest(error, user, info) {
    if (error || !user) {
      throw error || new UnauthorizedException()
    }
    return user
  }
}
