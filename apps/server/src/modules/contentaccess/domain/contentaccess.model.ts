import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Educationalcontent } from '../../../modules/educationalcontent/domain'

import { User } from '../../../modules/user/domain'

@Entity()
export class Contentaccess {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  accessDate?: string

  @Column({})
  contentId: string

  @ManyToOne(() => Educationalcontent, parent => parent.contentaccesssAsContent)
  @JoinColumn({ name: 'contentId' })
  content?: Educationalcontent

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.contentaccesss)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
