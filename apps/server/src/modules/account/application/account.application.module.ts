import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AccountDomainModule } from '../domain'
import { AccountController } from './account.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { AccountByUserController } from './accountByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, AccountDomainModule, UserDomainModule],
  controllers: [AccountController, AccountByUserController],
  providers: [],
})
export class AccountApplicationModule {}
