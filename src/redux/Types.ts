export type AuthState = {
  user: User;
  isLoading?: boolean;
  errorMessage?: string;
  loggedIn?: boolean;
  signUp?: IsSignUp;
  verifyUser?: AuthLogType;
};

export type AuthLogType = {
  errorMessage: string;
  isLoading: false;
  successMessage: string;
};

export type IsSignUp = {
  errorMessage?: string;
  isLoading?: boolean;
  email?: string;
  name: string;
  password: string;
};

export type User = {
  name: string;
  email?: string;
  password: string;
};

export type AuthPayload = {
  user: User;
};

export type AuthAction = {
  type: string;
  payload?: AuthPayload;
};
