export class Municipality {
  constructor(
    public id: string,
    public value: string,
    public code: string,
    public status: boolean,
    public province: {
      id: string,
      value: string,
      code: string
    }
  ) {
  }
}
