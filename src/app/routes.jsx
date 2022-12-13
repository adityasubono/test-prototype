import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import {Navigate} from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import adminSystemRoutes from "./views/admin-system/AdminSystemRoutes";
import studentRoutes from "./views/students/StudentRoutes";
import parentRoutes from "./views/parents/StudentRoutes";
import materialProductionRoutes from "./views/material-production/MaterialProductionRoutes";
import libraryRoutes from "./views/e-library/LibraryRoutes";
import financeRoutes from "./views/finance/FinanceRoutes";
import generalAffairRoutes from "./views/general-affair/GeneralAffairRoutes";
import admissionSystemRoutes from "./views/admission/AdmissionRoutes";
import reportingRoutes from "./views/reporting/ReportingRoutes";
import alumniSystemRoutes from "./views/alumni/AlumniRoutes";
import homeRoutes from "./views/home/HomeRoutes";

const routes = [
    {
        element: (
            <AuthGuard>
                <MatxLayout/>
            </AuthGuard>
        ),
        children: [
            ...homeRoutes,
            ...studentRoutes,
            ...parentRoutes,
            ...materialProductionRoutes,
            ...libraryRoutes,
            ...financeRoutes,
            ...generalAffairRoutes,
            ...admissionSystemRoutes,
            ...reportingRoutes,
            ...alumniSystemRoutes,
            ...adminSystemRoutes,
            ...dashboardRoutes,
            ...chartsRoute,
            ...materialRoutes
        ],
    },
    ...sessionRoutes,
    {path: "/", element: <Navigate to="/test-prototype"/>},
    {path: '*', element: <NotFound/>},
];

export default routes;
