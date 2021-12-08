import { PrimaryButton } from "@fluentui/react"
import { useNavigate } from "react-location"
import { tw } from "twind";
import Layout from "../../common/layout";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const navigate = useNavigate();
    return (
        <Layout>
            <PrimaryButton
                text="Go Back"
                iconProps={{iconName:'Back'}}
                onClick={()=> navigate({to:'/schools-management/schools'})}
                className={tw`w-64`}
            />
        </Layout>
    )
}