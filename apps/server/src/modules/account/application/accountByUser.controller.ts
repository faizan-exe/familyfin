import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AccountDomainFacade } from '@server/modules/account/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AccountApplicationEvent } from './account.application.event'
import { AccountCreateDto } from './account.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class AccountByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private accountDomainFacade: AccountDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/accounts')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.accountDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/accounts')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: AccountCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.accountDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AccountApplicationEvent.AccountCreated.Payload>(
      AccountApplicationEvent.AccountCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
