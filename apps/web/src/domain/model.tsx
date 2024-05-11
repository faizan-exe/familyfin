import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Account as AccountModel } from './account/account.model'

import { Goal as GoalModel } from './goal/goal.model'

import { Transaction as TransactionModel } from './transaction/transaction.model'

import { Allowance as AllowanceModel } from './allowance/allowance.model'

import { Educationalcontent as EducationalcontentModel } from './educationalcontent/educationalcontent.model'

import { Contentaccess as ContentaccessModel } from './contentaccess/contentaccess.model'

import { Investment as InvestmentModel } from './investment/investment.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Account extends AccountModel {}

  export class Goal extends GoalModel {}

  export class Transaction extends TransactionModel {}

  export class Allowance extends AllowanceModel {}

  export class Educationalcontent extends EducationalcontentModel {}

  export class Contentaccess extends ContentaccessModel {}

  export class Investment extends InvestmentModel {}
}
