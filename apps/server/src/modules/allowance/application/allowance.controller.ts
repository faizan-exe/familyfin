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
  Allowance,
  AllowanceDomainFacade,
} from '@server/modules/allowance/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AllowanceApplicationEvent } from './allowance.application.event'
import { AllowanceCreateDto, AllowanceUpdateDto } from './allowance.dto'

@Controller('/v1/allowances')
export class AllowanceController {
  constructor(
    private eventService: EventService,
    private allowanceDomainFacade: AllowanceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.allowanceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: AllowanceCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.allowanceDomainFacade.create(body)

    await this.eventService.emit<AllowanceApplicationEvent.AllowanceCreated.Payload>(
      AllowanceApplicationEvent.AllowanceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:allowanceId')
  async findOne(
    @Param('allowanceId') allowanceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.allowanceDomainFacade.findOneByIdOrFail(
      allowanceId,
      queryOptions,
    )

    return item
  }

  @Patch('/:allowanceId')
  async update(
    @Param('allowanceId') allowanceId: string,
    @Body() body: AllowanceUpdateDto,
  ) {
    const item = await this.allowanceDomainFacade.findOneByIdOrFail(allowanceId)

    const itemUpdated = await this.allowanceDomainFacade.update(
      item,
      body as Partial<Allowance>,
    )
    return itemUpdated
  }

  @Delete('/:allowanceId')
  async delete(@Param('allowanceId') allowanceId: string) {
    const item = await this.allowanceDomainFacade.findOneByIdOrFail(allowanceId)

    await this.allowanceDomainFacade.delete(item)

    return item
  }
}
