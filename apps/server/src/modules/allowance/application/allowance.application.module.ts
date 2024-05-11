import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AllowanceDomainModule } from '../domain'
import { AllowanceController } from './allowance.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { AllowanceByUserController } from './allowanceByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AllowanceDomainModule,

    UserDomainModule,
  ],
  controllers: [AllowanceController, AllowanceByUserController],
  providers: [],
})
export class AllowanceApplicationModule {}
