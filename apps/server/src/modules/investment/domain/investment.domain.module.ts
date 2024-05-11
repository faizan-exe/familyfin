import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { InvestmentDomainFacade } from './investment.domain.facade'
import { Investment } from './investment.model'

@Module({
  imports: [TypeOrmModule.forFeature([Investment]), DatabaseHelperModule],
  providers: [InvestmentDomainFacade, InvestmentDomainFacade],
  exports: [InvestmentDomainFacade],
})
export class InvestmentDomainModule {}
