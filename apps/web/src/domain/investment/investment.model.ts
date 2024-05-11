import { Transaction } from '../transaction'

export class Investment {
  id: string

  investedAmount?: number

  transactionId: string

  transaction?: Transaction

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
