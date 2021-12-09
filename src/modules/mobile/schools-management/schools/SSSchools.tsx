import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-location";
import { tw } from "twind";
import Layout from "../../common/layout";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div
        className={tw`mt-10 flex flex-col container mx-auto items-center space-y-5`}
      >
        <PrimaryButton
          text="Go Back"
          iconProps={{ iconName: "Back" }}
          onClick={() => navigate({ to: "/schools-management" })}
          className={tw`w-64`}
        />

        <DefaultButton
          text="Create school"
          iconProps={{ iconName: "Add" }}
          onClick={() => navigate({ to: "/schools-management/schools/create" })}
          className={tw`w-64`}
        />

        <h1 className={tw`text-lg text-gray-500 font-bold`}>Schools</h1>
        <div
          className={tw`flex flex-col bg-White shadow-xl rounded-lg w-64 p-10 items-center text-gray-500 mt-10 space-y-2`}
        >
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}>SS School adasda adasdasd</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>
          <div className={tw`flex flex-row space-x-4`}>
            <span className={tw`font-bold text-gray-600`}>School Name: </span>
            <span className={tw`text-gray-500`}> SS School</span>
          </div>

          <div className={tw`flex flex-row space-x-10 mt-5`}>
            <PencilIcon
              width={20}
              height={20}
              className={tw`text-gray-400 hover:text-red-800`}
            />
            <TrashIcon
              width={20}
              height={20}
              className={tw`text-gray-400 hover:text-red-800`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
