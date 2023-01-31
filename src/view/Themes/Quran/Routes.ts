import SimpleLayout from '../../../Layouts/SimpleLayout';
import { IRoute } from '../../../common/types/common';
import Quran from './Quran';
export const QuranRoute: IRoute = {
  path: '/quran',
  component: Quran,
  layout: SimpleLayout,
  exact: true,
};
