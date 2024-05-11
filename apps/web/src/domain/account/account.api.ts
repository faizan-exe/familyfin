import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Account } from './account.model'

export class AccountApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Account>,
  ): Promise<Account[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/accounts${buildOptions}`)
  }

  static findOne(
    accountId: string,
    queryOptions?: ApiHelper.QueryOptions<Account>,
  ): Promise<Account> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/accounts/${accountId}${buildOptions}`)
  }

  static createOne(values: Partial<Account>): Promise<Account> {
    return HttpService.api.post(`/v1/accounts`, values)
  }

  static updateOne(
    accountId: string,
    values: Partial<Account>,
  ): Promise<Account> {
    return HttpService.api.patch(`/v1/accounts/${accountId}`, values)
  }

  static deleteOne(accountId: string): Promise<void> {
    return HttpService.api.delete(`/v1/accounts/${accountId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Account>,
  ): Promise<Account[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/accounts${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Account>,
  ): Promise<Account> {
    return HttpService.api.post(`/v1/users/user/${userId}/accounts`, values)
  }
}
