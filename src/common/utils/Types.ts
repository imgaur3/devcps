export interface IRoute {
  path: string;
  component: any;
  layout: any;
  exact?: boolean;
}

export interface UserRole {
  role: string;
}
export interface User {
  username: string;
  name: string;
  phone: string | null;
  role: UserRole;
}
