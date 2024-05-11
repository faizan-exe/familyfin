import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AllowanceDomainFacade } from '@server/modules/allowance/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AllowanceApplicationEvent } from './allowance.application.event'
import { AllowanceCreateDto } from './allowance.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class AllowanceByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private allowanceDomainFacade: AllowanceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/child/:childId/allowances')
  async findManyChildId(
    @Param('childId') childId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(childId)

    const items = await this.allowanceDomainFacade.findManyByChild(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/child/:childId/allowances')
  async createByChildId(
    @Param('childId') childId: string,
    @Body() body: AllowanceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, childId }

    const item = await this.allowanceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AllowanceApplicationEvent.AllowanceCreated.Payload>(
      AllowanceApplicationEvent.AllowanceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
