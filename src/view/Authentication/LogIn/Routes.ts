import AuthLayout from '../../../Layouts/AuthLayout';
import { IRoute } from '../../../common/types/common';
import LogIn from './LogIn';

export const LogInRoute: IRoute = {
  path: '/login',
  component: LogIn,
  layout: AuthLayout,
  exact: true,
};
