import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TransactionDomainFacade } from '@server/modules/transaction/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TransactionApplicationEvent } from './transaction.application.event'
import { TransactionCreateDto } from './transaction.dto'

import { AccountDomainFacade } from '../../account/domain'

@Controller('/v1/accounts')
export class TransactionByAccountController {
  constructor(
    private accountDomainFacade: AccountDomainFacade,

    private transactionDomainFacade: TransactionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/account/:accountId/transactions')
  async findManyAccountId(
    @Param('accountId') accountId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.accountDomainFacade.findOneByIdOrFail(accountId)

    const items = await this.transactionDomainFacade.findManyByAccount(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/account/:accountId/transactions')
  async createByAccountId(
    @Param('accountId') accountId: string,
    @Body() body: TransactionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, accountId }

    const item = await this.transactionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TransactionApplicationEvent.TransactionCreated.Payload>(
      TransactionApplicationEvent.TransactionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
