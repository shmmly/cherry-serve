import {
  UnauthorizedException,
  Injectable,
  ExecutionContext,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    const ctx = GqlExecutionContext.create(context)



    return super.canActivate(context)
  }

  handleRequest(error, user, info) {
    if (error || !user) {
      throw error || new UnauthorizedException()
    }
    return user
  }
}
