import { Navigate } from "react-location";
import { useUserContext } from "../../../context/user/UserContext";
import { Loading } from "../common/loading";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }:any) => {
  const user = useUserContext()
  debugger;
  if (user?.data) {
    return children;
  }

  if (user?.isLoading) {
    return <Loading/>;
  }

  return <Navigate to="/" />;
};
