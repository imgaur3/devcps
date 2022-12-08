export type FN = any;

export interface IRoute {
  path: string;
  component: any;
  layout: any;
  exact?: boolean;
}

export interface ISagaAction<T> {
  payload: T;
  type: string;
}

export interface ISignUpModal {
  name: string;
  email: string;
  password: string;
}

export interface ISignInModal {
  username: string;
  password: string;
}
export interface IUsername {
  username: string;
}

export interface IVerifyUser extends IUsername {
  code: string;
}

export interface ISignInVerifyCode {
  code: string;
  user: any;
}

export interface IForgotPassword extends IVerifyUser {
  password: string;
}

export interface ISetPassword extends ISignInModal {
  newPassword: string;
}

export interface IErrorLog {
  message: string;
}

export type ArrayType = {
  text: string;
  value: string | number;
};
