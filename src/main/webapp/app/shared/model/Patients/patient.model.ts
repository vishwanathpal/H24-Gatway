export interface IPatient {
  id?: number;
  firstName?: string;
  lastName?: string;
  mobile?: number;
  email?: string;
  address?: string;
  dob?: string;
  gender?: string;
}

export class Patient implements IPatient {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public mobile?: number,
    public email?: string,
    public address?: string,
    public dob?: string,
    public gender?: string
  ) {}
}
