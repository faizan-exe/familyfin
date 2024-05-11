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

@Entity()
export class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  targetAmount?: number

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  currentAmount?: number

  @Column({ nullable: true })
  dueDate?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.goals)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
