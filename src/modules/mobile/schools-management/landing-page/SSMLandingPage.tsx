import { tw } from "twind"
import Layout from "../../common/layout"
import {AdjustmentsIcon} from "@heroicons/react/outline";
import { Link } from "react-location";
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return (
      <Layout>
        <div
          className={tw`flex flex-col container mx-auto items-center space-y-10`}
        >
          <Link
            to={"/schools-management/dashboard"}
            className={tw`flex bg-red-200 w-64 p-10 items-center text-gray-500 mt-10 space-x-10`}
          >
            <AdjustmentsIcon width={20} height={20} /> <h3>Dashboard</h3>
          </Link>
          <Link
            to={"/schools-management/schools"}
            className={tw`flex bg-red-200 w-64 p-10 items-center text-gray-500 mt-10 space-x-10`}
          >
            <AdjustmentsIcon width={20} height={20} /> <h3>Schools</h3>
          </Link>
          <Link
            to={"/schools-management/classes"}
            className={tw`flex bg-red-200 w-64 p-10 items-center text-gray-500 mt-10 space-x-10`}
          >
            <AdjustmentsIcon width={20} height={20} /> <h3>Classes</h3>
          </Link>{" "}
          <Link
            to={"/schools-management/sessions"}
            className={tw`flex bg-red-200 w-64 p-10 items-center text-gray-500 mt-10 space-x-10`}
          >
            <AdjustmentsIcon width={20} height={20} /> <h3>Sessions</h3>
          </Link>
        </div>
      </Layout>
    );
}