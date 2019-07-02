import { User } from './../model/user';
import { InputType, Field } from 'type-graphql';
import { MaxLength, Max } from 'class-validator';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  @MaxLength(19)
  name: string;

  @Field({ nullable: true })
  @Max(100)
  age: number;
}
