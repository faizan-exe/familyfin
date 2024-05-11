import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { EducationalcontentDomainModule } from '../domain'
import { EducationalcontentController } from './educationalcontent.controller'

@Module({
  imports: [AuthenticationDomainModule, EducationalcontentDomainModule],
  controllers: [EducationalcontentController],
  providers: [],
})
export class EducationalcontentApplicationModule {}
