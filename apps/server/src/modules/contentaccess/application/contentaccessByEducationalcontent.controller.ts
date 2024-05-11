import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ContentaccessDomainFacade } from '@server/modules/contentaccess/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ContentaccessApplicationEvent } from './contentaccess.application.event'
import { ContentaccessCreateDto } from './contentaccess.dto'

import { EducationalcontentDomainFacade } from '../../educationalcontent/domain'

@Controller('/v1/educationalcontents')
export class ContentaccessByEducationalcontentController {
  constructor(
    private educationalcontentDomainFacade: EducationalcontentDomainFacade,

    private contentaccessDomainFacade: ContentaccessDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/content/:contentId/contentaccesss')
  async findManyContentId(
    @Param('contentId') contentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.educationalcontentDomainFacade.findOneByIdOrFail(contentId)

    const items = await this.contentaccessDomainFacade.findManyByContent(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/content/:contentId/contentaccesss')
  async createByContentId(
    @Param('contentId') contentId: string,
    @Body() body: ContentaccessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, contentId }

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
