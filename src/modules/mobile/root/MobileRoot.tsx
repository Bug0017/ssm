import { UserContextProvider } from "../../../context"
import {
  Router,
  Outlet,
  ReactLocation,
  createMemoryHistory,
} from "react-location";

import { QueryClient, QueryClientProvider } from "react-query";
import routes from "../routes/routes";

 // Create a memory history
 const hashHistory = createMemoryHistory();
 
const queryClient = new QueryClient();

const location = new ReactLocation({ history: hashHistory });
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Router location={location} routes={routes}>
            <Outlet />
          </Router>
        </UserContextProvider>
      </QueryClientProvider>
    );
}