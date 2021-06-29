import paths from './paths';
import IRoute from '../interfaces/IRoute';

import MainPage from '../components/MainPage/MainPage';
import AccommodationListPage from '../components/AccommodationListPage/AccommodationListPage';
import AccommodationView from '../components/AccommodationView/AccommodationView';

const routes: IRoute[] = [
  {
    path: paths.mainPage,
    exact: true,
    name: 'Main page',
    component: MainPage,
  },
  {
    path: paths.accommodationList,
    exact: true,
    name: 'Accommodation List',
    component: AccommodationListPage,
  },
  {
    path: paths.accommodationList,
    exact: false,
    name: 'Accommodation View',
    component: AccommodationView,
  },
];

export default routes;
