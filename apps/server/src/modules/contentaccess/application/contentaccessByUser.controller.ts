import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ContentaccessDomainFacade } from '@server/modules/contentaccess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ContentaccessApplicationEvent } from './contentaccess.application.event'
import { ContentaccessCreateDto } from './contentaccess.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ContentaccessByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private contentaccessDomainFacade: ContentaccessDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/contentaccesss')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.contentaccessDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/contentaccesss')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ContentaccessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.contentaccessDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ContentaccessApplicationEvent.ContentaccessCreated.Payload>(
      ContentaccessApplicationEvent.ContentaccessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
