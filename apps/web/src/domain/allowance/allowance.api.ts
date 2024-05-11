import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Allowance } from './allowance.model'

export class AllowanceApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Allowance>,
  ): Promise<Allowance[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/allowances${buildOptions}`)
  }

  static findOne(
    allowanceId: string,
    queryOptions?: ApiHelper.QueryOptions<Allowance>,
  ): Promise<Allowance> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/allowances/${allowanceId}${buildOptions}`)
  }

  static createOne(values: Partial<Allowance>): Promise<Allowance> {
    return HttpService.api.post(`/v1/allowances`, values)
  }

  static updateOne(
    allowanceId: string,
    values: Partial<Allowance>,
  ): Promise<Allowance> {
    return HttpService.api.patch(`/v1/allowances/${allowanceId}`, values)
  }

  static deleteOne(allowanceId: string): Promise<void> {
    return HttpService.api.delete(`/v1/allowances/${allowanceId}`)
  }

  static findManyByChildId(
    childId: string,
    queryOptions?: ApiHelper.QueryOptions<Allowance>,
  ): Promise<Allowance[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/child/${childId}/allowances${buildOptions}`,
    )
  }

  static createOneByChildId(
    childId: string,
    values: Partial<Allowance>,
  ): Promise<Allowance> {
    return HttpService.api.post(`/v1/users/child/${childId}/allowances`, values)
  }
}
