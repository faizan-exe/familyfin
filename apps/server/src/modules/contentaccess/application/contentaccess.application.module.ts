import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ContentaccessDomainModule } from '../domain'
import { ContentaccessController } from './contentaccess.controller'

import { EducationalcontentDomainModule } from '../../../modules/educationalcontent/domain'

import { ContentaccessByEducationalcontentController } from './contentaccessByEducationalcontent.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ContentaccessByUserController } from './contentaccessByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ContentaccessDomainModule,

    EducationalcontentDomainModule,

    UserDomainModule,
  ],
  controllers: [
    ContentaccessController,

    ContentaccessByEducationalcontentController,

    ContentaccessByUserController,
  ],
  providers: [],
})
export class ContentaccessApplicationModule {}
