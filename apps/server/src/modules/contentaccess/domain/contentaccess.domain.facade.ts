import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Contentaccess } from './contentaccess.model'

import { Educationalcontent } from '../../educationalcontent/domain'

import { User } from '../../user/domain'

@Injectable()
export class ContentaccessDomainFacade {
  constructor(
    @InjectRepository(Contentaccess)
    private repository: Repository<Contentaccess>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Contentaccess>): Promise<Contentaccess> {
    return this.repository.save(values)
  }

  async update(
    item: Contentaccess,
    values: Partial<Contentaccess>,
  ): Promise<Contentaccess> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Contentaccess): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Contentaccess> = {},
  ): Promise<Contentaccess[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Contentaccess> = {},
  ): Promise<Contentaccess> {
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

  async findManyByContent(
    item: Educationalcontent,
    queryOptions: RequestHelper.QueryOptions<Contentaccess> = {},
  ): Promise<Contentaccess[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('content')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        contentId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Contentaccess> = {},
  ): Promise<Contentaccess[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
