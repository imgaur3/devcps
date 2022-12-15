import { USER_LOGIN, SIGN_UP, LOG_OUT } from './Actions';
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
      // only for demo
      // eslint-disable-next-line no-case-declarations
      const user = localStorage.getItem('user');
      if (user === 'test@gmail.com') {
        return {
          ...state,
          loggedIn: true,
        };
      } else {
        return {
          ...state,
          loggedIn: false,
        };
      }
    case LOG_OUT:
      localStorage.clear();
      return {
        ...authInitialState,
      };

    default:
      return state;
  }
};

export default AuthReducer;
