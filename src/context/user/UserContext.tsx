import { createContext, useContext } from "react";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../firebase";

const UserContext = createContext({user:null} as any);
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }:any) => {
  const user = useAuthUser(["user"], auth);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
