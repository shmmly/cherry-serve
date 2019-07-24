import { Base } from '../../common/base'
import { Field, Int, ObjectType } from 'type-graphql'
import { prop } from 'typegoose'
import { Timestamp } from 'bson'
import { Max, MaxLength, MinLength } from 'class-validator'
import { Role } from '../../role/model/role'

@ObjectType({ implements: Base })
export class User extends Base {
  /* 名字是唯一的 */
  @prop({ unique: true })
  @Field(_ => String)
  name: string

  @prop()
  @Field(_ => Int)
  age: number

  @prop()
  @Field(_ => String)
  tel: string

  @prop()
  @Field(_ => String)
  email: string

  @MinLength(6)
  @MaxLength(8)
  @Field(_ => String)
  password: string

  @prop()
  @Field(_ => Role)
  roles: Role[]
}

export default new User().getModelForClass(User, {
  schemaOptions: { timestamps: true },
})
