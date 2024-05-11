import { Account } from '../account'

import { Investment } from '../investment'

export class Transaction {
  id: string

  amount?: number

  transactionType?: string

  timestamp?: string

  accountId: string

  account?: Account

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  investments?: Investment[]
}
