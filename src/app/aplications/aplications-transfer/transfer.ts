export class Transfer {
  constructor(
    public id: string,
    public date: string,
    // tslint:disable-next-line:variable-name
    public app_admitions: {
      id: string,
      hcs: {
        id: string,
        nohc: string,
        name: string
      }
    },
    // tslint:disable-next-line:variable-name
    public isolation_center_source: {
      id: string,
      value: string,
      municipalities: {
        id: string,
        value: string
      }
    },
    // tslint:disable-next-line:variable-name
    public isolation_center_destinations: {
      id: string,
      value: string,
      municipalities: {
        id: string,
        value: string
      }
    }
  ) {
  }
}
