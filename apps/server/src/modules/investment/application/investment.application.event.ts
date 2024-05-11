export namespace InvestmentApplicationEvent {
  export namespace InvestmentCreated {
    export const key = 'investment.application.investment.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
