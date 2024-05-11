import { User } from '../user'

export class Allowance {
  id: string

  amount?: number

  frequency?: string

  childId: string

  child?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
