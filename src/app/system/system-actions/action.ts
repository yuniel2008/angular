export class Action {
  constructor(
    public id: string,
    public dates: string,
    public actions: string,
    // tslint:disable-next-line:variable-name
    public user_actions: {
      id: string,
      username: string,
      roles: string
    }
  ) {
  }
}
