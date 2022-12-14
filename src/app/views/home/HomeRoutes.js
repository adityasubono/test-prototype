import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Home = Loadable(lazy(() => import('./Home')));

const homeRoutes = [
    { path: '/test-prototype', element: <Home />, auth: authRoles.admin },
];

export default homeRoutes;
