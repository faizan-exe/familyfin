import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Contentaccess } from './contentaccess.model'

export class ContentaccessApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Contentaccess>,
  ): Promise<Contentaccess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/contentaccesss${buildOptions}`)
  }

  static findOne(
    contentaccessId: string,
    queryOptions?: ApiHelper.QueryOptions<Contentaccess>,
  ): Promise<Contentaccess> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/contentaccesss/${contentaccessId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Contentaccess>): Promise<Contentaccess> {
    return HttpService.api.post(`/v1/contentaccesss`, values)
  }

  static updateOne(
    contentaccessId: string,
    values: Partial<Contentaccess>,
  ): Promise<Contentaccess> {
    return HttpService.api.patch(
      `/v1/contentaccesss/${contentaccessId}`,
      values,
    )
  }

  static deleteOne(contentaccessId: string): Promise<void> {
    return HttpService.api.delete(`/v1/contentaccesss/${contentaccessId}`)
  }

  static findManyByContentId(
    contentId: string,
    queryOptions?: ApiHelper.QueryOptions<Contentaccess>,
  ): Promise<Contentaccess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/educationalcontents/content/${contentId}/contentaccesss${buildOptions}`,
    )
  }

  static createOneByContentId(
    contentId: string,
    values: Partial<Contentaccess>,
  ): Promise<Contentaccess> {
    return HttpService.api.post(
      `/v1/educationalcontents/content/${contentId}/contentaccesss`,
      values,
    )
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Contentaccess>,
  ): Promise<Contentaccess[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/contentaccesss${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Contentaccess>,
  ): Promise<Contentaccess> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/contentaccesss`,
      values,
    )
  }
}
