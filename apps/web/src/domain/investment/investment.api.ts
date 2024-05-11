import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Investment } from './investment.model'

export class InvestmentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Investment>,
  ): Promise<Investment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/investments${buildOptions}`)
  }

  static findOne(
    investmentId: string,
    queryOptions?: ApiHelper.QueryOptions<Investment>,
  ): Promise<Investment> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/investments/${investmentId}${buildOptions}`)
  }

  static createOne(values: Partial<Investment>): Promise<Investment> {
    return HttpService.api.post(`/v1/investments`, values)
  }

  static updateOne(
    investmentId: string,
    values: Partial<Investment>,
  ): Promise<Investment> {
    return HttpService.api.patch(`/v1/investments/${investmentId}`, values)
  }

  static deleteOne(investmentId: string): Promise<void> {
    return HttpService.api.delete(`/v1/investments/${investmentId}`)
  }

  static findManyByTransactionId(
    transactionId: string,
    queryOptions?: ApiHelper.QueryOptions<Investment>,
  ): Promise<Investment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/transactions/transaction/${transactionId}/investments${buildOptions}`,
    )
  }

  static createOneByTransactionId(
    transactionId: string,
    values: Partial<Investment>,
  ): Promise<Investment> {
    return HttpService.api.post(
      `/v1/transactions/transaction/${transactionId}/investments`,
      values,
    )
  }
}
