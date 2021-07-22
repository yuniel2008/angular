export class Test {
  constructor(
    public id: string,
    // tslint:disable-next-line:variable-name
    public date_samples: string,
    // tslint:disable-next-line:variable-name
    public result_date: string,
    // tslint:disable-next-line:variable-name
    public status_test: string,
    public result: boolean,
    public hc: {
      id: string,
      nohc: string,
      name: string,
    },
    // tslint:disable-next-line:variable-name
    public laboratory: {
      id: string,
      value: string
    }
  ) {
  }
}
