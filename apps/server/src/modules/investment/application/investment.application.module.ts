import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { InvestmentDomainModule } from '../domain'
import { InvestmentController } from './investment.controller'

import { TransactionDomainModule } from '../../../modules/transaction/domain'

import { InvestmentByTransactionController } from './investmentByTransaction.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    InvestmentDomainModule,

    TransactionDomainModule,
  ],
  controllers: [InvestmentController, InvestmentByTransactionController],
  providers: [],
})
export class InvestmentApplicationModule {}
