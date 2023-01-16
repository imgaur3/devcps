import SimpleLayout from '../../Layouts/SimpleLayout';
import { IRoute } from '../../common/types/common';
import Themes from './Themes';

export const ThemeRoute: IRoute = {
  path: '/themes',
  component: Themes,
  layout: SimpleLayout,
  exact: true,
};
