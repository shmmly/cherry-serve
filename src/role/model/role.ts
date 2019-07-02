import { Base } from '../../common/base';
import { ObjectType, Field } from 'type-graphql';
import { Resource } from '../../resource/model/resource';
import { prop, Ref, arrayProp } from 'typegoose';

@ObjectType({ implements: Base })
export class Role extends Base {
  /* 角色名称 */
  @Field(_ => String)
  @prop()
  name: string;

  /*  对应的资源 */
  @arrayProp({ itemsRef: Resource })
  @Field(_ => [Resource])
  resource: Ref<Resource>[];
}

export default new Role().getModelForClass(Role, {
  schemaOptions: { timestamps: true },
});
