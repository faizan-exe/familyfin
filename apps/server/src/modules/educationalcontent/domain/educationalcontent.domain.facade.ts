import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Educationalcontent } from './educationalcontent.model'

@Injectable()
export class EducationalcontentDomainFacade {
  constructor(
    @InjectRepository(Educationalcontent)
    private repository: Repository<Educationalcontent>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Educationalcontent>,
  ): Promise<Educationalcontent> {
    return this.repository.save(values)
  }

  async update(
    item: Educationalcontent,
    values: Partial<Educationalcontent>,
  ): Promise<Educationalcontent> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Educationalcontent): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Educationalcontent> = {},
  ): Promise<Educationalcontent[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Educationalcontent> = {},
  ): Promise<Educationalcontent> {
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
}
