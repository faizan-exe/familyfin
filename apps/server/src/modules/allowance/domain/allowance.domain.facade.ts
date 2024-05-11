import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Allowance } from './allowance.model'

import { User } from '../../user/domain'

@Injectable()
export class AllowanceDomainFacade {
  constructor(
    @InjectRepository(Allowance)
    private repository: Repository<Allowance>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Allowance>): Promise<Allowance> {
    return this.repository.save(values)
  }

  async update(
    item: Allowance,
    values: Partial<Allowance>,
  ): Promise<Allowance> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Allowance): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Allowance> = {},
  ): Promise<Allowance[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Allowance> = {},
  ): Promise<Allowance> {
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

  async findManyByChild(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Allowance> = {},
  ): Promise<Allowance[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('child')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        childId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
