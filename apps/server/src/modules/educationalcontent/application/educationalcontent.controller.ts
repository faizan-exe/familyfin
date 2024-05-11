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
  Educationalcontent,
  EducationalcontentDomainFacade,
} from '@server/modules/educationalcontent/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { EducationalcontentApplicationEvent } from './educationalcontent.application.event'
import {
  EducationalcontentCreateDto,
  EducationalcontentUpdateDto,
} from './educationalcontent.dto'

@Controller('/v1/educationalcontents')
export class EducationalcontentController {
  constructor(
    private eventService: EventService,
    private educationalcontentDomainFacade: EducationalcontentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.educationalcontentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: EducationalcontentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.educationalcontentDomainFacade.create(body)

    await this.eventService.emit<EducationalcontentApplicationEvent.EducationalcontentCreated.Payload>(
      EducationalcontentApplicationEvent.EducationalcontentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:educationalcontentId')
  async findOne(
    @Param('educationalcontentId') educationalcontentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.educationalcontentDomainFacade.findOneByIdOrFail(
      educationalcontentId,
      queryOptions,
    )

    return item
  }

  @Patch('/:educationalcontentId')
  async update(
    @Param('educationalcontentId') educationalcontentId: string,
    @Body() body: EducationalcontentUpdateDto,
  ) {
    const item =
      await this.educationalcontentDomainFacade.findOneByIdOrFail(
        educationalcontentId,
      )

    const itemUpdated = await this.educationalcontentDomainFacade.update(
      item,
      body as Partial<Educationalcontent>,
    )
    return itemUpdated
  }

  @Delete('/:educationalcontentId')
  async delete(@Param('educationalcontentId') educationalcontentId: string) {
    const item =
      await this.educationalcontentDomainFacade.findOneByIdOrFail(
        educationalcontentId,
      )

    await this.educationalcontentDomainFacade.delete(item)

    return item
  }
}
