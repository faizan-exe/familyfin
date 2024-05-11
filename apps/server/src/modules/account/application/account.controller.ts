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
import { Account, AccountDomainFacade } from '@server/modules/account/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AccountApplicationEvent } from './account.application.event'
import { AccountCreateDto, AccountUpdateDto } from './account.dto'

@Controller('/v1/accounts')
export class AccountController {
  constructor(
    private eventService: EventService,
    private accountDomainFacade: AccountDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.accountDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: AccountCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.accountDomainFacade.create(body)

    await this.eventService.emit<AccountApplicationEvent.AccountCreated.Payload>(
      AccountApplicationEvent.AccountCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:accountId')
  async findOne(
    @Param('accountId') accountId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.accountDomainFacade.findOneByIdOrFail(
      accountId,
      queryOptions,
    )

    return item
  }

  @Patch('/:accountId')
  async update(
    @Param('accountId') accountId: string,
    @Body() body: AccountUpdateDto,
  ) {
    const item = await this.accountDomainFacade.findOneByIdOrFail(accountId)

    const itemUpdated = await this.accountDomainFacade.update(
      item,
      body as Partial<Account>,
    )
    return itemUpdated
  }

  @Delete('/:accountId')
  async delete(@Param('accountId') accountId: string) {
    const item = await this.accountDomainFacade.findOneByIdOrFail(accountId)

    await this.accountDomainFacade.delete(item)

    return item
  }
}
