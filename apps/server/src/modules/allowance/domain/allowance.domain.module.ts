import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AllowanceDomainFacade } from './allowance.domain.facade'
import { Allowance } from './allowance.model'

@Module({
  imports: [TypeOrmModule.forFeature([Allowance]), DatabaseHelperModule],
  providers: [AllowanceDomainFacade, AllowanceDomainFacade],
  exports: [AllowanceDomainFacade],
})
export class AllowanceDomainModule {}
