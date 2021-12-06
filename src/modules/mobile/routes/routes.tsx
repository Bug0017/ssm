import Login from "../auth";
import { SSMLandingPage } from "../schools-management/landing-page";
import ProtectedRoute from "./ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
        <Login />
      
    ),
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
    ],
  },
];

export default routes;
