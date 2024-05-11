import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Educationalcontent } from './educationalcontent.model'

export class EducationalcontentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Educationalcontent>,
  ): Promise<Educationalcontent[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/educationalcontents${buildOptions}`)
  }

  static findOne(
    educationalcontentId: string,
    queryOptions?: ApiHelper.QueryOptions<Educationalcontent>,
  ): Promise<Educationalcontent> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/educationalcontents/${educationalcontentId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Educationalcontent>,
  ): Promise<Educationalcontent> {
    return HttpService.api.post(`/v1/educationalcontents`, values)
  }

  static updateOne(
    educationalcontentId: string,
    values: Partial<Educationalcontent>,
  ): Promise<Educationalcontent> {
    return HttpService.api.patch(
      `/v1/educationalcontents/${educationalcontentId}`,
      values,
    )
  }

  static deleteOne(educationalcontentId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/educationalcontents/${educationalcontentId}`,
    )
  }
}
