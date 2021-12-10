import { Image } from "@fluentui/react"
import { CogIcon } from "@heroicons/react/outline";
import { tw } from "twind"
import logoImage from '../../../../assets/logo.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <div className={tw`flex flex-row pb-5 pr-5 justify-between`}>
        <Image src={logoImage}  alt="logo" className={tw`w-20 h-20`} />

        <div className={tw`flex flex-row items-center space-x-3`}>
          <div className={tw`bg-red-600 rounded-full w-11 h-11`}></div>
          <div>
            <CogIcon className={tw`w-7 h-7 text-gray-500`}/>
          </div>
        </div>
      </div>
    );
}