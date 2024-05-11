import { Contentaccess } from '../contentaccess'

export class Educationalcontent {
  id: string

  title?: string

  description?: string

  ageGroup?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  contentaccesssAsContent?: Contentaccess[]
}
