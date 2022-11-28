import { IRoute } from '../../../common/utils/Types';
import SimpleLayout from '../../../Layouts/SimpleLayout';
import LogIn from './LogIn';

export const SignInRoute: IRoute = {
  exact: true,
  path: '/sign-in',
  element: LogIn,
  layout: SimpleLayout,
};
