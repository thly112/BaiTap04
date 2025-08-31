export interface IUser {
  id: number;
  email: string;
  name: string;
  role?: 'user' | 'admin';
  createdAt?: string;
  updatedAt?: string;
}
