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

import { Transaction } from '../../../modules/transaction/domain'

@Entity()
export class Investment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  investedAmount?: number

  @Column({})
  transactionId: string

  @ManyToOne(() => Transaction, parent => parent.investments)
  @JoinColumn({ name: 'transactionId' })
  transaction?: Transaction

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
