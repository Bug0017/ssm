import { tw } from "twind"
import Layout from "../../common/layout"

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return (
        <Layout>
            <div className={tw`container mx-auto`}></div>
        </Layout>
    )
}