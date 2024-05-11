import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AccountDomainFacade } from './account.domain.facade'
import { Account } from './account.model'

@Module({
  imports: [TypeOrmModule.forFeature([Account]), DatabaseHelperModule],
  providers: [AccountDomainFacade, AccountDomainFacade],
  exports: [AccountDomainFacade],
})
export class AccountDomainModule {}
