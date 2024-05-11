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

import { Contentaccess } from '../../../modules/contentaccess/domain'

@Entity()
export class Educationalcontent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  title?: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  ageGroup?: string

  @OneToMany(() => Contentaccess, child => child.content)
  contentaccesssAsContent?: Contentaccess[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
