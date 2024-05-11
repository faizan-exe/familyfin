import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Investment } from './investment.model'

import { Transaction } from '../../transaction/domain'

@Injectable()
export class InvestmentDomainFacade {
  constructor(
    @InjectRepository(Investment)
    private repository: Repository<Investment>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Investment>): Promise<Investment> {
    return this.repository.save(values)
  }

  async update(
    item: Investment,
    values: Partial<Investment>,
  ): Promise<Investment> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Investment): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Investment> = {},
  ): Promise<Investment[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Investment> = {},
  ): Promise<Investment> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByTransaction(
    item: Transaction,
    queryOptions: RequestHelper.QueryOptions<Investment> = {},
  ): Promise<Investment[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('transaction')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        transactionId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
