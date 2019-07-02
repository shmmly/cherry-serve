import { ModelType } from 'typegoose'
import { of } from 'rxjs'
import { Args } from 'type-graphql'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export function createBaseService<T>(model: ModelType<T>) {
  abstract class BaseService {
    /* 新建 */
    @UseGuards(AuthGuard())
    create(inputModel: any) {
      const entity = new model({ ...inputModel })
      of(model.create(entity))
    }
    /* 更新 */
    @UseGuards(AuthGuard())
    update(entity: any) {
      console.log(entity, 'update')
      return of(model.findOneAndUpdate({}, { ...entity }, { new: true }))
    }
    /* 分页查询  前端传递的skip为页数，所以这里*take 获取对应的个数  */
    @UseGuards(AuthGuard())
    findAll({ skip, take }) {
      const skipCount = skip * take
      return of(
        model
          .find({})
          .limit(take)
          .skip(skipCount),
      )
    }

    @UseGuards(AuthGuard())
    findOneById(id: string) {
      return of(model.findOne({ _id: id }))
    }
  }
  return BaseService
}
