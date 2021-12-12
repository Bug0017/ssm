import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../../firebase";
import { Login } from "../auth/login";
import {  Loading, MonkeyLoading } from "../common/loading";
import { SSMWebLandingPage } from "../school-management/landing-page";


function Checker() {
  const user = useAuthUser(["user"], auth);

  if (user?.isLoading) {
    return <Loading />;
  }

  if (user?.data) {
    return <SSMWebLandingPage />;
  }

  return <Login />;
}


const routes = [
  {
    path: "*",
    element: <MonkeyLoading />,
  },
  {
    path: "/",
    element: <Checker />,
  },
  {
    path: "/schools-management",
    element: <SSMWebLandingPage />,
  },
];

export default routes;
