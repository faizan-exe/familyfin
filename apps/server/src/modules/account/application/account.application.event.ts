export namespace AccountApplicationEvent {
  export namespace AccountCreated {
    export const key = 'account.application.account.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
