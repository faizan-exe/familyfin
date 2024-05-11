import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { InvestmentDomainFacade } from '@server/modules/investment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { InvestmentApplicationEvent } from './investment.application.event'
import { InvestmentCreateDto } from './investment.dto'

import { TransactionDomainFacade } from '../../transaction/domain'

@Controller('/v1/transactions')
export class InvestmentByTransactionController {
  constructor(
    private transactionDomainFacade: TransactionDomainFacade,

    private investmentDomainFacade: InvestmentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/transaction/:transactionId/investments')
  async findManyTransactionId(
    @Param('transactionId') transactionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.transactionDomainFacade.findOneByIdOrFail(transactionId)

    const items = await this.investmentDomainFacade.findManyByTransaction(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/transaction/:transactionId/investments')
  async createByTransactionId(
    @Param('transactionId') transactionId: string,
    @Body() body: InvestmentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, transactionId }

    const item = await this.investmentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<InvestmentApplicationEvent.InvestmentCreated.Payload>(
      InvestmentApplicationEvent.InvestmentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
