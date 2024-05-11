import { User } from '../user'

import { Transaction } from '../transaction'

export class Account {
  id: string

  accountType?: string

  balance?: number

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  transactions?: Transaction[]
}
