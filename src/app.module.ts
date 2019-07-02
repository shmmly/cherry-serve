import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
// import { LoginModule } from './login/login.module';
// import { ResourceModule } from './resource/resource.module';
// import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
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
