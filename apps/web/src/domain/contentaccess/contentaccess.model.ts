import { Educationalcontent } from '../educationalcontent'

import { User } from '../user'

export class Contentaccess {
  id: string

  accessDate?: string

  contentId: string

  content?: Educationalcontent

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
