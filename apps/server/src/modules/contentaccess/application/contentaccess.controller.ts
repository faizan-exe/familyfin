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
  Contentaccess,
  ContentaccessDomainFacade,
} from '@server/modules/contentaccess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ContentaccessApplicationEvent } from './contentaccess.application.event'
import {
  ContentaccessCreateDto,
  ContentaccessUpdateDto,
} from './contentaccess.dto'

@Controller('/v1/contentaccesss')
export class ContentaccessController {
  constructor(
    private eventService: EventService,
    private contentaccessDomainFacade: ContentaccessDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.contentaccessDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ContentaccessCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.contentaccessDomainFacade.create(body)

    await this.eventService.emit<ContentaccessApplicationEvent.ContentaccessCreated.Payload>(
      ContentaccessApplicationEvent.ContentaccessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:contentaccessId')
  async findOne(
    @Param('contentaccessId') contentaccessId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.contentaccessDomainFacade.findOneByIdOrFail(
      contentaccessId,
      queryOptions,
    )

    return item
  }

  @Patch('/:contentaccessId')
  async update(
    @Param('contentaccessId') contentaccessId: string,
    @Body() body: ContentaccessUpdateDto,
  ) {
    const item =
      await this.contentaccessDomainFacade.findOneByIdOrFail(contentaccessId)

    const itemUpdated = await this.contentaccessDomainFacade.update(
      item,
      body as Partial<Contentaccess>,
    )
    return itemUpdated
  }

  @Delete('/:contentaccessId')
  async delete(@Param('contentaccessId') contentaccessId: string) {
    const item =
      await this.contentaccessDomainFacade.findOneByIdOrFail(contentaccessId)

    await this.contentaccessDomainFacade.delete(item)

    return item
  }
}
