export type Role = "staff" | "student" | "manager" | "admin";
export type Gender = "male" | "female" | "other";

export interface IPlace {
  city: string;
  street: string;
  postalCode: string;
}

export interface ICompany {
  id: number;
  name: string;
  description?: string;
  location: IPlace;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: IPlace;
  role: Role;
  username: string;
  profilePhotoUrl?: string;
  companies: ICompany[];
  gender: Gender;
}
