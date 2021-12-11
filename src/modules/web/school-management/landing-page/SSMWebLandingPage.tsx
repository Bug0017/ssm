import { AcademicCapIcon, AdjustmentsIcon, BeakerIcon, CalendarIcon, ClipboardCheckIcon, LibraryIcon, TruckIcon, UserAddIcon, UserGroupIcon } from "@heroicons/react/outline";
import { Link } from "react-location";
import { tw } from "twind"
import { Layout } from "../../common/layout"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <Layout>
        <div className={tw`flex flex-col items-center`}>
          <div className={tw`flex flex-col lg:flex-row p-5  md:space-y-2 lg:space-x-10`}>
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
              <CalendarIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Academic Management</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <UserGroupIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Student Management</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row  border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <UserAddIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Administration</h1>
              </div>
            </Link>
          </div>
          <div className={tw`flex flex-col lg:flex-row p-5  md:space-y-2 lg:space-x-10`}>
            <Link
              to=""
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <AcademicCapIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Examination</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <ClipboardCheckIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Library Management</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100 `}
            >
              <TruckIcon width={20} height={20} className={tw`text-red-900`} />
              <div className={tw`flex flex-col`}>
                <h1>Transport Management</h1>
              </div>
            </Link>
            <Link
              className={tw`flex flex-row  border-2 items-center w-64 p-10 space-x-4 shadow hover:bg-gray-100 `}
            >
              <LibraryIcon
                width={20}
                height={20}
                className={tw`text-red-900`}
              />
              <div className={tw`flex flex-col`}>
                <h1>Hotel Management</h1>
              </div>
            </Link>
          </div>
          <div className={tw`flex flex-col lg:flex-row p-5  md:space-y-2 lg:space-x-10`}>
            <Link
              to=""
              className={tw`flex flex-row border-2 items-center w-64 p-10 space-x-4 hover:bg-gray-100`}
            >
              <BeakerIcon width={20} height={20} className={tw`text-red-900`} />
              <div className={tw`flex flex-col`}>
                <h1>Lab Management</h1>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    );
}