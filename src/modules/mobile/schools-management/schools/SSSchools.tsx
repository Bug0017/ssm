import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useAuthUser } from "@react-query-firebase/auth";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, limit, query, where } from "firebase/firestore";
import { useNavigate } from "react-location";
import { tw } from "twind";
import { auth, firestore } from "../../../../firebase";
import Layout from "../../common/layout";
import { Loading } from "../../common/loading";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();
  const user = useAuthUser(["user"], auth);
  
    const userID = user?.data?.uid;

   const readRef = query(
     collection(firestore, "schools"),
     limit(1),
     where("userID", "==", userID)
   );

   const fetchedQuery = useFirestoreQuery(["schools"], readRef);
  
   const documentID = fetchedQuery.data?.docs[0].id;

   if (fetchedQuery.isLoading){
     return <Loading/>
   }

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
        {fetchedQuery.data?.empty === true ? (
          <DefaultButton
            text="Create school"
            iconProps={{ iconName: "Add" }}
            onClick={() =>
              navigate({ to: "/schools-management/schools/create" })
            }
            className={tw`w-64`}
          />
        ) : (
          <div>
            <h1 className={tw`text-lg text-gray-500 font-bold`}>Schools</h1>
            <div
              className={tw`flex flex-col bg-white shadow-xl rounded-lg w-64 p-10 items-start text-gray-500 mt-10 space-y-2`}
            >
              {fetchedQuery.data?.docs.map((docSnapshot, i) => {
                const data = docSnapshot.data();
                debugger;
                return (
                  <>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        School Name:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.schoolName}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Email:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.email}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Address:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.address}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        City:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.city}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Pin Code:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.pinCode}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        State:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.state}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Country:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.country}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Phone:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.mobile}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Fax:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.fax}
                      </span>
                    </div>
                    <div className={tw`flex flex-row space-x-4`}>
                      <span className={tw`font-bold text-gray-600 text-xs`}>
                        Website:
                      </span>
                      <span className={tw`text-gray-500 text-xs`}>
                        {data.website}
                      </span>
                    </div>
                  </>
                );
              })}

              <div className={tw`flex flex-row space-x-10 mt-5`}>
                <PencilIcon
                  width={20}
                  height={20}
                  className={tw`text-gray-400 hover:text-red-800`}
                  onClick={() =>
                    navigate({
                      to: `/schools-management/schools/edit/${documentID}`,
                    })
                  }
                />
                <TrashIcon
                  width={20}
                  height={20}
                  className={tw`text-gray-400 hover:text-red-800`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
