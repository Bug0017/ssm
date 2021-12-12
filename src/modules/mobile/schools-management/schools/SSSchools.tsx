import React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { PencilIcon } from "@heroicons/react/outline";
import { useAuthUser } from "@react-query-firebase/auth";
import {
  useFirestoreQuery
} from "@react-query-firebase/firestore";
import { collection, limit, query, where } from "firebase/firestore";
import { useNavigate } from "react-location";
import { tw, apply } from "twind";
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

        const documentID = fetchedQuery.data?.docs[0]?.id;
  

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
                return (
                  <React.Fragment key={i}>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>
                        School Name:
                      </span>
                      <span className={tw`${cardItemBody}`}>
                        {data.schoolName}
                      </span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Email:</span>
                      <span className={tw`${cardItemBody}`}>{data.email}</span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Address:</span>
                      <span className={tw`${cardItemBody}`}>
                        {data.address}
                      </span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>City:</span>
                      <span className={tw`${cardItemBody}`}>{data.city}</span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Pin Code:</span>
                      <span className={tw`${cardItemBody}`}>
                        {data.pinCode}
                      </span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>State:</span>
                      <span className={tw`${cardItemBody}`}>{data.state}</span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Country:</span>
                      <span className={tw`${cardItemBody}`}>
                        {data.country}
                      </span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Phone:</span>
                      <span className={tw`${cardItemBody}`}>{data.mobile}</span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Fax:</span>
                      <span className={tw`${cardItemBody}`}>{data.fax}</span>
                    </div>
                    <div className={tw`${cardItem}`}>
                      <span className={tw`${cardItemHeader}`}>Website:</span>
                      <span className={tw`${cardItemBody}`}>
                        {data.website}
                      </span>
                    </div>
                  </React.Fragment>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};


const cardItem = apply`flex flex-row space-x-4`;
const cardItemHeader = apply`font-bold text-gray-600 text-xs`;
const cardItemBody = apply`text-gray-500 text-xs`;