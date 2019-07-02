import { User } from './../../user/model/user';
import { Field } from 'type-graphql';

class Login implements Partial<User> {
  @Field(_ => String)
  email: string;
}
