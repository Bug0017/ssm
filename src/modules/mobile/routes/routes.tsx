import Login from "../auth";
import { SSMClasses } from "../schools-management/classes";
import { SSMDashboard } from "../schools-management/dashboard";
import { SSInquiries } from "../schools-management/inquiries";
import { SSMLandingPage } from "../schools-management/landing-page";
import { SSSchoolCreate, SSSchools } from "../schools-management/schools";
import { SSSessions } from "../schools-management/sessions";
import { SSSettings } from "../schools-management/settings";
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
        children: [
          {
            path: "/",
            element: (
              <ProtectedRoute>
                <SSSchools />
              </ProtectedRoute>
            ),
          },
          {
            path: "/create",
            element: (
              <ProtectedRoute>
                <SSSchoolCreate />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/inquiries",
        element: (
          <ProtectedRoute>
            <SSInquiries />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <SSSettings />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default routes;
