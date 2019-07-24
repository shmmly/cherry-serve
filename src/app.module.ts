import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module'
import { DatabaseModule } from './database/database.module'
// import { LoginModule } from './login/login.module';
// import { ResourceModule } from './resource/resource.module';
// import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module'
import { User } from './user/model/user'
interface Context {
  user?: User
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: () => {
        const ctx: Context = {
          user: {
            name: 'sample user',
            roles: [{ name: 'Admin' }],
          },
        }
        return ctx
      },
    }),
    UserModule,
    DatabaseModule,
    AuthModule,
    // LoginModule,
    // ResourceModule,
    // RoleModule,
  ],
})
export class AppModule {}
