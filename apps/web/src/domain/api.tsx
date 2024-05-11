import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { AccountApi } from './account/account.api'

import { GoalApi } from './goal/goal.api'

import { TransactionApi } from './transaction/transaction.api'

import { AllowanceApi } from './allowance/allowance.api'

import { EducationalcontentApi } from './educationalcontent/educationalcontent.api'

import { ContentaccessApi } from './contentaccess/contentaccess.api'

import { InvestmentApi } from './investment/investment.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Account extends AccountApi {}

  export class Goal extends GoalApi {}

  export class Transaction extends TransactionApi {}

  export class Allowance extends AllowanceApi {}

  export class Educationalcontent extends EducationalcontentApi {}

  export class Contentaccess extends ContentaccessApi {}

  export class Investment extends InvestmentApi {}
}
