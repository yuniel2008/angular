export class IsolationsCenter {
  constructor(
    public id: string,
    public value: string,
    public code: string,
    public status: boolean,
    public capacity: string,
    // tslint:disable-next-line:variable-name
    public capacity_occupies: string,
    public address: string,
    public phone: string,
    public type: string,
    public municipalities: {
      id: string,
      value: string,
      code: string
    }
  ) {
  }
}
