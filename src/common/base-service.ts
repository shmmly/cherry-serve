/*
 * @Author: 流年的樱花逝
 * @Date: 2019-07-24 16:49:54
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-07-24 16:50:20
 *
 * 这里封装了基本的crud方法
 *
 */
import { ModelType } from 'typegoose'
import { of } from 'rxjs'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

export function createBaseService<T>(model: ModelType<T>) {
  abstract class BaseService {
    /* 新建 */
    @UseGuards(JwtAuthGuard)
    create(inputModel: any) {
      const entity = new model({ ...inputModel })
      of(model.create(entity))
    }
    /* 更新 */
    @UseGuards(JwtAuthGuard)
    update(entity: any) {
      console.log(entity, 'update')
      return of(model.findOneAndUpdate({}, { ...entity }, { new: true }))
    }
    /* 分页查询  前端传递的skip为页数，所以这里*take 获取对应的个数  */
    @UseGuards(JwtAuthGuard)
    findAll({ skip, take }) {
      const skipCount = skip * take
      return of(
        model
          .find({})
          .limit(take)
          .skip(skipCount),
      )
    }

    /* 通过id 查询对应的数据 */
    @UseGuards(JwtAuthGuard)
    findOneById(id: string) {
      return of(model.findOne({ _id: id }))
    }
  }
  return BaseService
}
