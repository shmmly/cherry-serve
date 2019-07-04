/*
 * @Author: 流年的樱花逝
 * @Date: 2019-07-03 08:34:54
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-07-03 08:38:54
 *  jwt 策略配置
 * 验证token的有效性，token生成的时候 会绑定用户存入redis中，并设定有效时间
 * 这里查询数据库 如果token失效 提示用户需要重新登录
 *
 */
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
  /* 验证 token是否有效 */
  // 1 判断用户是否存在
  // 2 判断toekn是否过期
  async validate(payload: JwtPayload) {
    const token = await this.authService.validateToken(payload)
    if (!token) {
      throw new UnauthorizedException()
    }
    return token
  }
}
