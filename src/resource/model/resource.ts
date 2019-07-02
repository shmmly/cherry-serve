import { prop } from 'typegoose';
import { Field, ObjectType } from 'type-graphql';
import { Base } from '../../common/base';

@ObjectType({ implements: Base })
export class Resource extends Base {
  /*  资源名称   首页 数据 展示*/
  @prop()
  @Field(_ => String)
  name: string;

  /* 资源对应的前端访问地址  */
  @prop()
  @Field(_ => String)
  url: string;
}
