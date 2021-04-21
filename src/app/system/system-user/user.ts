export class User {
  constructor(
    public id: string,
    public username: string,
    public roles: string,
    public status: boolean,
    // tslint:disable-next-line:variable-name
    public personal_informations: {
       fullname: string,
       ci: string,
       gender: string,
       email: string,
       phone: number
    },


  ) {
  }
}
