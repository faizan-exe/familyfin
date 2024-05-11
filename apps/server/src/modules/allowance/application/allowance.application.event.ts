export namespace AllowanceApplicationEvent {
  export namespace AllowanceCreated {
    export const key = 'allowance.application.allowance.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
