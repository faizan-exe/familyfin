import { Notification } from '../notification'

import { Account } from '../account'

import { Goal } from '../goal'

import { Allowance } from '../allowance'

import { Contentaccess } from '../contentaccess'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  accounts?: Account[]

  goals?: Goal[]

  allowancesAsChild?: Allowance[]

  contentaccesss?: Contentaccess[]
}
