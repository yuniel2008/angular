export class Log {
  constructor(
    public id: string,
    public dates: string,
    public error: string,
    public actions: string,
    // tslint:disable-next-line:variable-name
    public user_logs: {
      username: string,
      roles: string
    }
  ) {
  }
}
