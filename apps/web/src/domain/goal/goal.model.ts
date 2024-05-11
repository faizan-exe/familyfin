import { User } from '../user'

export class Goal {
  id: string

  description?: string

  targetAmount?: number

  currentAmount?: number

  dueDate?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
