import { PrimaryButton, TextField } from "@fluentui/react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-location"
import { tw } from "twind";
import Layout from "../../common/layout";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const navigate = useNavigate();
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data:any)=>{
      console.log(data)
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="School Name:"
              placeholder="SS Schools"
              {...register("schoolName", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Email:"
              placeholder="test@test.com"
              {...register("email", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Address:"
              placeholder="No: 123, main street"
              {...register("address", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="City:"
              placeholder="Villupuram"
              {...register("city", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="State:"
              placeholder="TN"
              {...register("state", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Country:"
              placeholder="IN"
              {...register("country", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Fax:"
              placeholder=""
              {...register("fax", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Mobile No:"
              placeholder="8825549745"
              {...register("mobile", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <TextField
              label="Website:"
              placeholder=""
              type="url"
              {...register("website", { required: true })}
              errorMessage={errors.password && "Required"}
              className={tw`w-64`}
            />
            <PrimaryButton
              text="Submit"
              iconProps={{ iconName: "Add" }}
              className={tw`w-64 mt-5`}
            />
          </form>
        </div>
      </Layout>
    );
}