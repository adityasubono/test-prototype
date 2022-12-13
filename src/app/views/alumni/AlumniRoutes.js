import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AlumniSystemMenu1 = Loadable(lazy(() => import('./Menu1')));
const AlumniSystemMenu2 = Loadable(lazy(() => import('./Menu2')));
const AlumniSystemMenu3 = Loadable(lazy(() => import('./Menu3')));

const alumniSystemRoutes = [
    { path: '/alumni/menu1', element: <AlumniSystemMenu1 />, auth: authRoles.admin },
    { path: '/alumni/menu2', element: <AlumniSystemMenu2 />, auth: authRoles.admin },
    { path: '/alumni/menu3', element: <AlumniSystemMenu3 />, auth: authRoles.admin },
];

export default alumniSystemRoutes;
