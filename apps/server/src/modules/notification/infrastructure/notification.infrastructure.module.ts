import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationAccountSubscriber } from './subscribers/notification.account.subscriber'

import { NotificationGoalSubscriber } from './subscribers/notification.goal.subscriber'

import { NotificationTransactionSubscriber } from './subscribers/notification.transaction.subscriber'

import { NotificationAllowanceSubscriber } from './subscribers/notification.allowance.subscriber'

import { NotificationEducationalcontentSubscriber } from './subscribers/notification.educationalcontent.subscriber'

import { NotificationContentaccessSubscriber } from './subscribers/notification.contentaccess.subscriber'

import { NotificationInvestmentSubscriber } from './subscribers/notification.investment.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationAccountSubscriber,

    NotificationGoalSubscriber,

    NotificationTransactionSubscriber,

    NotificationAllowanceSubscriber,

    NotificationEducationalcontentSubscriber,

    NotificationContentaccessSubscriber,

    NotificationInvestmentSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
