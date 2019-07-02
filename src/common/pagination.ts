import { ArgsType, Field, Int } from 'type-graphql';
import { Min, Max } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  /* 分页忽略的个数 */
  @Field(_ => Int, { nullable: true, defaultValue: 0 })
  skip: number;
  /* 分页获取的个数 默认10个*/

  @Field(_ => Int, { nullable: true, defaultValue: 10 })
  take: number;
}
