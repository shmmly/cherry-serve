import { Role } from '../model/role';
import { InputType, Field } from 'type-graphql';
import { Resource } from 'src/resource/model/resource';

@InputType()
export class RoleInput implements Partial<Role> {
  @Field(_ => String)
  name: string;

  @Field(_ => Resource)
  resource: Resource[];
}
