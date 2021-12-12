import { PrimaryButton, TextField } from "@fluentui/react";
import { useForm } from "react-hook-form";
import { useMatch, useNavigate } from "react-location";
import { tw } from "twind";
import Layout from "../../common/layout";


import { useFirestoreDocument, useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import {
  collection,
  doc,
} from "firebase/firestore";
import { auth, firestore } from "../../../../firebase";
import { Loading } from "../../common/loading";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const navigate = useNavigate();
  const {
    params: { docID },
  } = useMatch();

    const ref = doc(firestore, "schools", docID);
    const school = useFirestoreDocument(["schools", docID], ref);

    const snapshotData = school.data?.data();

    const editCollection = collection(firestore,"schools");
    const editRef = doc(editCollection, docID);
    const mutation = useFirestoreDocumentMutation(editRef);

    const userID = auth.currentUser?.uid;

  debugger;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate({...data,userID})
    navigate({to:"/schools-management/schools", replace:true})
  };

  if (school.isLoading){
    return <Loading/>
  }

    return (
      <Layout>
        <div
          className={tw`mt-10 flex flex-col container  mx-auto items-center space-y-5`}
        >
          <PrimaryButton
            text="Go Back"
            iconProps={{ iconName: "Back" }}
            onClick={() => navigate({ to: "/schools-management/schools" })}
            className={tw`w-64`}
          />
          <h1 className={tw`text-lg text-gray-500 font-bold`}>Edit School</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="School Name:"
              placeholder="SS Schools"
              {...register("schoolName", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.schoolName}
            />
            <TextField
              label="Email:"
              placeholder="test@test.com"
              {...register("email", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.email}
            />
            <TextField
              label="Address:"
              placeholder="No: 123, main street"
              {...register("address", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.address}
            />
            <TextField
              label="City:"
              placeholder="Villupuram"
              {...register("city", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.city}
            />
            <TextField
              label="Pin Code:"
              placeholder="605652"
              {...register("pinCode", { required: true })}
              errorMessage={errors.city && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.pinCode}
            />
            <TextField
              label="State:"
              placeholder="TN"
              {...register("state", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.state}
            />
            <TextField
              label="Country:"
              placeholder="IN"
              {...register("country", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.country}
            />
            <TextField
              label="Fax:"
              placeholder=""
              {...register("fax")}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.fax}
            />
            <TextField
              label="Mobile No:"
              placeholder="8825549745"
              {...register("mobile", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.mobile}
            />
            <TextField
              label="Website:"
              placeholder=""
              type="url"
              {...register("website")}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
              defaultValue={snapshotData?.website}
            />
            <PrimaryButton
              text="Update"
              iconProps={{ iconName: "Update" }}
              className={tw`w-64 mt-5`}
              type="submit"
            />
          </form>
        </div>
      </Layout>
    );
};
