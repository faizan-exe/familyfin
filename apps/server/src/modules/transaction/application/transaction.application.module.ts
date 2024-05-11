import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TransactionDomainModule } from '../domain'
import { TransactionController } from './transaction.controller'

import { AccountDomainModule } from '../../../modules/account/domain'

import { TransactionByAccountController } from './transactionByAccount.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TransactionDomainModule,

    AccountDomainModule,
  ],
  controllers: [TransactionController, TransactionByAccountController],
  providers: [],
})
export class TransactionApplicationModule {}
