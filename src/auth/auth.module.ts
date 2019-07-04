import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' })

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    passportModule,
    /* 这里设定秘钥和对应的有效时间 */
    JwtModule.register({
      secret: 'cherry',
      signOptions: {
        expiresIn: '2 days',
      },
    }),
  ],
  exports: [passportModule],
})
export class AuthModule {}
