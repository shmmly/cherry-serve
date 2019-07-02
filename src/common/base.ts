/*
 * @Author: 流年的樱花逝
 * @Date: 2019-07-02 11:49:11
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-07-02 13:21:29
 *
 * 这里的_id 属性不能添加 @prop()注解 否则 mongoodb不会自动生成objectid 而是需要明确的传递一个_id
 *
 */
import { Field, InterfaceType, ID } from 'type-graphql';
import { Typegoose, prop } from 'typegoose';
import { ObjectIdScalar } from './ObjectIdScalar';
import { State } from './enum';

@InterfaceType()
export abstract class Base extends Typegoose {
  @Field(_ => ObjectIdScalar)
  readonly _id: string;

  @Field(_ => Date)
  readonly createdAt: Date;

  @Field(_ => Date)
  readonly updatedAt: Date;

  @prop({ enum: State })
  @Field(_ => State)
  state?: State;
}
