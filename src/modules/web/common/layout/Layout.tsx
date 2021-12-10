import { tw } from "twind";
import { Header } from "../header";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}:any) => {
    return (
      <div className={tw`flex bg-gray-100 flex-col h-screen`}>
        <Header />
        <div className={tw` h-full bg-gray-50 p-10`}>{children}</div>
      </div>
    );
}