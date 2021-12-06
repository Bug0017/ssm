import { tw } from "twind"
import myTheme from "../../../../../theme"
import {  AcademicCapIcon, AdjustmentsIcon, AnnotationIcon, BeakerIcon, CalendarIcon, ClipboardCheckIcon, LibraryIcon, LockClosedIcon, MenuIcon, OfficeBuildingIcon, SpeakerphoneIcon, TruckIcon, UserAddIcon, UserGroupIcon } from "@heroicons/react/outline";
import { Panel, Image, PrimaryButton } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import logoImage from '../../../../../assets/logo.svg'
import { Link, useNavigate } from "react-location";
import { auth } from "../../../../../firebase";
import { useAuthSignOut, useAuthUser } from "@react-query-firebase/auth";


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
  useBoolean(false);
  const mutation = useAuthSignOut(auth);
  const navigate = useNavigate();
  const user = useAuthUser(["user"], auth);

    return (
      <div
        style={{ backgroundColor: myTheme.palette.themePrimary }}
        className={tw`flex flex-row w-screen  h-30 border-box p-2 justify-between`}
      >
        <MenuIcon className={tw`text-white w-9 h-9`} onClick={openPanel} />

        <Panel
          isOpen={isOpen}
          onDismiss={dismissPanel}
          closeButtonAriaLabel="Close"
          dir="left"
        >
          <div className={tw`flex flex-col items-center`}>
            <Image
              src={logoImage}
              styles={{ root: { width: "150px", height: "150px" } }}
            />
            <p className={tw`text-gray-700 `}> 
            {
              user?.data?.email ? user.data.email : "dreamchaser6930@gmail.com"
            }
            </p>
            <PrimaryButton text="View Profile" className={tw`rounded-full`} />
          </div>
          <div className={tw`flex flex-col justify-start mt-10 space-y-8 p-10`}>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <AdjustmentsIcon width={19} height={19} />
              <h3>Schools Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <OfficeBuildingIcon width={19} height={19} />
              <h3>School Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <CalendarIcon width={19} height={19} />
              <h3>Academic Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <UserGroupIcon width={19} height={19} />
              <h3>Student Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <UserAddIcon width={19} height={19} />
              <h3>Administration</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <AcademicCapIcon width={19} height={19} />
              <h3>Examination</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <ClipboardCheckIcon width={19} height={19} />
              <h3>Library Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <TruckIcon width={19} height={19} />
              <h3>Transport Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <LibraryIcon width={19} height={19} />
              <h3>Hotel Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <BeakerIcon width={19} height={19} />
              <h3>Lab Management</h3>
            </Link>
            <Link
              to=""
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <AnnotationIcon width={19} height={19} />
              <h3>About Us</h3>
            </Link>
            <Link
              to=""
              onClick={()=> {
                mutation.mutate();
                setTimeout(()=>{
                  navigate({to:'/'});
                },1000)
              }}
              className={tw`flex flex-row space-x-8 text-gray-400 font-bold`}
            >
              <LockClosedIcon width={19} height={19} />
              <h3>Logout</h3>
            </Link>
          </div>
        </Panel>
        <div className={tw`flex flex-none space-x-5`}>
          <div
            className={tw` w-10 h-10 rounded-full bg-gray-50 text-center`}
          ></div>
          <SpeakerphoneIcon className={tw`text-white w-9 h-9`} />
          <span
            className={tw`absolute w-6 h-7 rounded-full bg-gray-900 text-white top-0 right-0 text-center`}
          >
            0
          </span>
        </div>
      </div>
    );
}