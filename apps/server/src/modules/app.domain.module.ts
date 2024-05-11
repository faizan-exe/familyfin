import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { AccountDomainModule } from './account/domain'

import { GoalDomainModule } from './goal/domain'

import { TransactionDomainModule } from './transaction/domain'

import { AllowanceDomainModule } from './allowance/domain'

import { EducationalcontentDomainModule } from './educationalcontent/domain'

import { ContentaccessDomainModule } from './contentaccess/domain'

import { InvestmentDomainModule } from './investment/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    AccountDomainModule,

    GoalDomainModule,

    TransactionDomainModule,

    AllowanceDomainModule,

    EducationalcontentDomainModule,

    ContentaccessDomainModule,

    InvestmentDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
