import {Hc} from '../aplications-hc/hc';

export class Admitions {
  constructor(
    public id: string,
    public entry: string,
    public egress: string,
    public status: boolean,
    // tslint:disable-next-line:variable-name
    public t0r_positive: boolean,
    public hcs: {
        id: string,
        nohc: string,
        name: string,
        ci: string
      },
    // tslint:disable-next-line:variable-name
    public isolation_center: {
      id: string,
      value: string
    }
  ) {
  }
}
