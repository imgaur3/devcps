export type FN = any;

export interface IRoute {
  path: string;
  component: any;
  layout?: any;
  exact?: boolean;
}

export type ArrayType = {
  text: string;
  value: string | number;
};

export interface ISignUpModal {
  name: string;
  email: string;
  password: string;
}
