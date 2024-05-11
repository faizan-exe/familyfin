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

import { User } from '../../../modules/user/domain'

import { Transaction } from '../../../modules/transaction/domain'

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  accountType?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  balance?: number

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.accounts)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Transaction, child => child.account)
  transactions?: Transaction[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
