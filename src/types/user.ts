export interface Address {
  id: number;
  userId: number;
  postcode: string;
  street: string;
  number: number;
  neighborhood: string | null;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface Information {
  id: number;
  userId: number;
  mother: string | null;
  father: string | null;
  sign: string | null;
  height: number | null;
  weight: number | null;
  gender: string | null;
  bloodType: string | null;
  color: string | null;
  cellphone: string | null;
  telephone: string;
  birthday: number;
  rg: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  address: Address;
  information: Information;
  createdAt: string;
  updatedAt: string;
}
