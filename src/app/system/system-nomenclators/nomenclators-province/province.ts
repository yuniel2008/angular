export class Province {
  constructor(
    public id: string,
    public value: string,
    public code: string,
    public status: boolean,
    public country: {
      id: string,
      value: string,
      code: string
    }
  ) {
  }
}
