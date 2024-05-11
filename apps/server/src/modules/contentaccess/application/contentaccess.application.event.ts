export namespace ContentaccessApplicationEvent {
  export namespace ContentaccessCreated {
    export const key = 'contentaccess.application.contentaccess.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
