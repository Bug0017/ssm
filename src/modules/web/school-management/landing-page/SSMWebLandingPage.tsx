import { AdjustmentsIcon } from "@heroicons/react/outline";
import { Link } from "react-location";
import { tw } from "twind"
import { Layout } from "../../common/layout"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
      <Layout>
        <div className={tw`flex flex-col `}>
          <div className={tw`flex flex-row p-20 flex-wrap  lg:space-x-10`}>
            <Link
              to=""
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row  border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
          </div>
          <div className={tw`flex flex-row p-20 flex-wrap lg:space-x-10`}>
            <Link
              to=""
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100 `}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row  border-2 items-center w-64 p-10 space-x-4 shadow hover:bg-gray-100 `}
            >
              <AdjustmentsIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Dashboard</h1>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    );
}