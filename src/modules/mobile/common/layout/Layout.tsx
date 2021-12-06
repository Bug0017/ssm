import { tw } from "twind"
import Header from "./header"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}:any)=>{
    return (
        <div className={tw`flex flex-col`}>
            <Header/>
            {children}
        </div>
    )
}