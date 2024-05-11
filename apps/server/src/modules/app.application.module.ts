import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { AccountApplicationModule } from './account/application'

import { GoalApplicationModule } from './goal/application'

import { TransactionApplicationModule } from './transaction/application'

import { AllowanceApplicationModule } from './allowance/application'

import { EducationalcontentApplicationModule } from './educationalcontent/application'

import { ContentaccessApplicationModule } from './contentaccess/application'

import { InvestmentApplicationModule } from './investment/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    AccountApplicationModule,

    GoalApplicationModule,

    TransactionApplicationModule,

    AllowanceApplicationModule,

    EducationalcontentApplicationModule,

    ContentaccessApplicationModule,

    InvestmentApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
