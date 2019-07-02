import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JwtPayload } from './interfaces/jwt-payload'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * 根据payload
   * 生成对应的token 并设定token过期时间
   */
  async createToken() {
    const payload: JwtPayload = { tel: '18001432610' }
    const accessToken = this.jwtService.sign(payload)
    return {
      expiresIn: 3600,
      accessToken,
    }
  }

  async validateToken(payload: JwtPayload): Promise<any> {
    return {}
  }
}
