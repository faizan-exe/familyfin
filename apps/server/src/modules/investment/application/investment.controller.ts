import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Investment,
  InvestmentDomainFacade,
} from '@server/modules/investment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { InvestmentApplicationEvent } from './investment.application.event'
import { InvestmentCreateDto, InvestmentUpdateDto } from './investment.dto'

@Controller('/v1/investments')
export class InvestmentController {
  constructor(
    private eventService: EventService,
    private investmentDomainFacade: InvestmentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.investmentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: InvestmentCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.investmentDomainFacade.create(body)

    await this.eventService.emit<InvestmentApplicationEvent.InvestmentCreated.Payload>(
      InvestmentApplicationEvent.InvestmentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:investmentId')
  async findOne(
    @Param('investmentId') investmentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.investmentDomainFacade.findOneByIdOrFail(
      investmentId,
      queryOptions,
    )

    return item
  }

  @Patch('/:investmentId')
  async update(
    @Param('investmentId') investmentId: string,
    @Body() body: InvestmentUpdateDto,
  ) {
    const item =
      await this.investmentDomainFacade.findOneByIdOrFail(investmentId)

    const itemUpdated = await this.investmentDomainFacade.update(
      item,
      body as Partial<Investment>,
    )
    return itemUpdated
  }

  @Delete('/:investmentId')
  async delete(@Param('investmentId') investmentId: string) {
    const item =
      await this.investmentDomainFacade.findOneByIdOrFail(investmentId)

    await this.investmentDomainFacade.delete(item)

    return item
  }
}
