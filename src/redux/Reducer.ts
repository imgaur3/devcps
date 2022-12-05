import { USER_LOGIN, SIGN_UP } from './Actions';
import { AuthAction } from './Types';

export const authInitialState: any = {
  user: {
    name: '',
    password: '',
  },
  signUp: {
    name: '',
    email: '',
    password: '',
  },
  isLoading: false,
  loggedIn: false,
  errorMessage: '',
  verifyUser: {
    errorMessage: '',
    isLoading: false,
    successMessage: '',
  },
};

const AuthReducer = (state = authInitialState, action: AuthAction) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        loggedIn: false,
        errorMessage: '',
        verificationCodeEnable: false,
        tempCognitoUser: null,
        user: { ...payload },
      };
    case SIGN_UP:
      return {
        ...state,
        signUp: {
          errorMessage: '',
          isLoading: true,
          email: '',
          password: '',
          username: '',
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
