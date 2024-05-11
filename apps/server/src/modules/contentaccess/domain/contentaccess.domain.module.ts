import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ContentaccessDomainFacade } from './contentaccess.domain.facade'
import { Contentaccess } from './contentaccess.model'

@Module({
  imports: [TypeOrmModule.forFeature([Contentaccess]), DatabaseHelperModule],
  providers: [ContentaccessDomainFacade, ContentaccessDomainFacade],
  exports: [ContentaccessDomainFacade],
})
export class ContentaccessDomainModule {}
