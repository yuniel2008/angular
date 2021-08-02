export class PcrAdmitions {
  constructor(
    admitions: {
      id: string,
      entry: string,
      hcs: {
        id: string,
        nohc: string,
        name: string,
        ci: string
      },
      isolation_center: {
        id: string,
        value: string
      }
    },
    pcr: [{
      id: string,
      date_samples: string,
      result_date: string,
      status_test: string,
      result: boolean,
      laboratory: {
        id: string,
        value: string
      }
    }]
  ) {
  }
}
