export class Activity {
  constructor(
    public id: string,
    public value: string,
    public code: string,
    public status: boolean,
    public category: {
      id: string,
      value: string,
      code: string
    }
  ) {
  }
}
