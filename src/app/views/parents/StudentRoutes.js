import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ParentMenu1 = Loadable(lazy(() => import('./Menu1')));
const ParentMenu2 = Loadable(lazy(() => import('./Menu2')));
const ParentMenu3 = Loadable(lazy(() => import('./Menu3')));

const parentRoutes = [
    { path: '/parents/menu1', element: <ParentMenu1 />, auth: authRoles.admin },
    { path: '/parents/menu2', element: <ParentMenu2 />, auth: authRoles.admin },
    { path: '/parents/menu3', element: <ParentMenu3 />, auth: authRoles.admin },
];

export default parentRoutes;
