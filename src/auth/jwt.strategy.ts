import { AuthService } from './auth.service'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { JwtPayload } from './interfaces/jwt-payload'
import { Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
    })
  }
  async validate(payload: JwtPayload) {
    const token = await this.authService.validateToken(payload)
    if (!token) {
      throw new UnauthorizedException()
    }
    return token
  }
}
