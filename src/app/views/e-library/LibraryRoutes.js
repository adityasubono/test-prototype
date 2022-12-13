import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const LibraryMenu1 = Loadable(lazy(() => import('./Menu1')));
const LibraryMenu2 = Loadable(lazy(() => import('./Menu2')));
const LibraryMenu3 = Loadable(lazy(() => import('./Menu3')));

const libraryRoutes = [
    { path: '/library/menu1', element: <LibraryMenu1 />, auth: authRoles.admin },
    { path: '/library/menu2', element: <LibraryMenu2 />, auth: authRoles.admin },
    { path: '/library/menu3', element: <LibraryMenu3 />, auth: authRoles.admin },
];

export default libraryRoutes;
