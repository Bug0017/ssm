import Login from "../auth";
import { SSMClasses } from "../schools-management/classes";
import { SSMDashboard } from "../schools-management/dashboard";
import { SSMLandingPage } from "../schools-management/landing-page";
import { SSSchools } from "../schools-management/schools";
import { SSSessions } from "../schools-management/sessions";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/schools-management",
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <SSMLandingPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <SSMDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/classes",
        element: (
          <ProtectedRoute>
            <SSMClasses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sessions",
        element: (
          <ProtectedRoute>
            <SSSessions />
          </ProtectedRoute>
        ),
      },
      {
        path: "/schools",
        element: (
          <ProtectedRoute>
            <SSSchools />
          </ProtectedRoute>
        ),
      }
    ],
  },
];

export default routes;
