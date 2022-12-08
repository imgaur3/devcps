import AuthLayout from '../../../Layouts/AuthLayout';
import { IRoute } from '../../../common/types/common';
import SignUp from './SignUp';

export const SignUpRoute: IRoute = {
  path: '/signup',
  component: SignUp,
  layout: AuthLayout,
  exact: true,
};
