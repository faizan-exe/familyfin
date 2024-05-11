import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { EducationalcontentDomainFacade } from './educationalcontent.domain.facade'
import { Educationalcontent } from './educationalcontent.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Educationalcontent]),
    DatabaseHelperModule,
  ],
  providers: [EducationalcontentDomainFacade, EducationalcontentDomainFacade],
  exports: [EducationalcontentDomainFacade],
})
export class EducationalcontentDomainModule {}
