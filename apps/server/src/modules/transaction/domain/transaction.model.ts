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

import { Account } from '../../../modules/account/domain'

import { Investment } from '../../../modules/investment/domain'

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  amount?: number

  @Column({ nullable: true })
  transactionType?: string

  @Column({ nullable: true })
  timestamp?: string

  @Column({})
  accountId: string

  @ManyToOne(() => Account, parent => parent.transactions)
  @JoinColumn({ name: 'accountId' })
  account?: Account

  @OneToMany(() => Investment, child => child.transaction)
  investments?: Investment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
