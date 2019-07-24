import { UserInput } from './dto/UserInput';
import { User } from './model/user';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { PaginationArgs } from '../common/pagination';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  user(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(_ => [User])
  users(@Args() args: PaginationArgs) {
    return this.userService.findAll(args);
  }

  @Mutation(_ => User)
  update(@Args('user') userInput: UserInput) {
    return this.userService.update(userInput);
  }

  @Mutation(_ => User)
  create(@Args('user') userInput: UserInput) {
    return this.userService.create(userInput);
  }
}
