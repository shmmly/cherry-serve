import { PaginationArgs } from './../common/pagination';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Role } from './model/role';
import { RoleService } from './role.service';

@Resolver(of => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(_ => [Role])
  findAll(@Args('roles') args: PaginationArgs) {
    return this.roleService.findAll(args);
  }
}
