import { ISignInModal, ISignUpModal } from '../common/types/common';

export const USER_LOGIN = 'user/USER-LOGIN';
export const SIGN_UP = 'user/SIGN_UP';

export const loginUser = (payload: ISignInModal) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const signUp = (payload: ISignUpModal) => ({ type: SIGN_UP, payload });
