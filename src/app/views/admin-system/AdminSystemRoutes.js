import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AdminSystemMenu1 = Loadable(lazy(() => import('./Menu1')));
const AdminSystemMenu2 = Loadable(lazy(() => import('./Menu2')));
const AdminSystemMenu3 = Loadable(lazy(() => import('./Menu3')));

const adminSystemRoutes = [
    { path: '/admin-system/menu1', element: <AdminSystemMenu1 />, auth: authRoles.admin },
    { path: '/admin-system/menu2', element: <AdminSystemMenu2 />, auth: authRoles.admin },
    { path: '/admin-system/menu3', element: <AdminSystemMenu3 />, auth: authRoles.admin },
];

export default adminSystemRoutes;
