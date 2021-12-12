import { PrimaryButton, TextField } from "@fluentui/react"
import { useAuthUser } from "@react-query-firebase/auth";
import { useFirestoreCollectionMutation,  } from "@react-query-firebase/firestore";
import { collection} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-location"
import { tw } from "twind";
import { auth, firestore } from "../../../../firebase";
import Layout from "../../common/layout";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const navigate = useNavigate();


    
    const user = useAuthUser(["user"], auth);
      

    const createRef = collection(firestore, "schools");
    const createMutation = useFirestoreCollectionMutation(createRef);
    const userID = user?.data?.uid;

   
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data:any)=>{
        createMutation.mutate({ ...data, userID});

        navigate({to:"/schools-management/schools" , replace:true})
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
          <h1 className={tw`text-lg text-gray-500 font-bold`}>Create School</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="School Name:"
              placeholder="SS Schools"
              {...register("schoolName", { required: true })}
              errorMessage={errors.schoolName && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Email:"
              placeholder="test@test.com"
              {...register("email", { required: true })}
              errorMessage={errors.email && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Address:"
              placeholder="No: 123, main street"
              {...register("address", { required: true })}
              errorMessage={errors.address && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="City:"
              placeholder="Villupuram"
              {...register("city", { required: true })}
              errorMessage={errors.city && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Pin Code:"
              placeholder="605652"
              {...register("pinCode", { required: true })}
              errorMessage={errors.city && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="State:"
              placeholder="TN"
              {...register("state", { required: true })}
              errorMessage={errors.state && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Country:"
              placeholder="IN"
              {...register("country", { required: true })}
              errorMessage={errors.country && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Fax:"
              placeholder=""
              {...register("fax")}
              errorMessage={errors.fax && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Mobile No:"
              placeholder="8825549745"
              {...register("mobile", { required: true })}
              errorMessage={errors.mobile && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Website:"
              placeholder=""
              type="url"
              {...register("website"    )}
              errorMessage={errors.website && "Required"}
              className={tw`w-64`}
            />
            <PrimaryButton
              text="Submit"
              type="submit"
              iconProps={{ iconName: "Add" }}
              className={tw`w-64 mt-5`}
            />
          </form>
        </div>
      </Layout>
    );
}