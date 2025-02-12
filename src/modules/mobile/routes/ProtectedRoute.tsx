import { useAuthUser } from "@react-query-firebase/auth";
import { Navigate } from "react-location";
import { auth } from "../../../firebase";
import { Loading } from "../common/loading";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }:any) => {
   const user = useAuthUser(["user"], auth);
  if (user?.data) {
    return children;
  }

  if (user?.isLoading) {
    return <Loading/>;
  }

  return <Navigate to="/" />;
};
