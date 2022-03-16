export type Role = "staff" | "student" | "manager" | "admin";
export type Gender = "male" | "female" | "other";

export interface Place {
  city: string;
  street: string;
  postalCode: string;
}

export interface Company {
  id: number;
  name: string;
  description?: string;
  location: Place;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Place;
  role: Role;
  username: string;
  profilePhotoUrl?: string;
  companies: Company[];
  gender: Gender;
}
