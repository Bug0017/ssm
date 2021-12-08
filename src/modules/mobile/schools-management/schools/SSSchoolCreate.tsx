import { PrimaryButton } from "@fluentui/react"
import { useNavigate } from "react-location"
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
            onClick={() => navigate({ to: "/schools-management/schools" })}
            className={tw`w-64`}
          />
          
        </div>
      </Layout>
    );
}