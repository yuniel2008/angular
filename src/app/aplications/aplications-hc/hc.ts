export class Hc {
  constructor(
    public id: string,
    public nohc: string,
    public name: string,
    public ci: string,
    public address: string,
    public phone: string,
    public patologies: string,
    public municipality: {
      id: string,
      value: string,
      code: string
    }
  ) {
  }
}
