import { IRoute } from '../../common/types/common';
import SimpleLayout from '../../Layouts/SimpleLayout';
import About from './About';

export const AboutRoute: IRoute = {
  path: '/about',
  component: About,
  layout: SimpleLayout,
  exact: true,
};
