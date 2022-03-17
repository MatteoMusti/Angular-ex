
export enum Gender { MALE = 'male', FEMALE = 'female' }
export enum Role { ADMIN = 'admin', MANAGER = 'MANAGER', STAFF = 'staff', OTHER = 'other' }

export interface ILocation {
  city: string;
  street: string;
  postalCode: string;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: ILocation;
  role: Role;
  username: string;
  profilePhotoUrl: string;
  gender: Gender;
}