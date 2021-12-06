import { Image, MessageBar, MessageBarType, PrimaryButton, TextField } from "@fluentui/react"
import { tw } from "twind"
import { useForm } from "react-hook-form"
import loginBGImage from '../../../assets/mobile_login.svg'
import logoImage from '../../../assets/logo.svg'
import myTheme from "../../../theme"
import { useNavigate } from "react-location";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { useBoolean } from "@fluentui/react-hooks";
import { useState } from "react"
import { auth } from "../../../firebase"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    const [showFBErrMsgBar, { toggle: toggleShowFBErrMsgBar }] =
      useBoolean(false);
    const [firebaseError, setFirebaseError] = useState("");
    const {
      register, handleSubmit, formState: { errors },
    } = useForm();

    const navigate = useNavigate();


     const mutation = useAuthSignInWithEmailAndPassword(auth, {
       onError(error) {
         toggleShowFBErrMsgBar();
         switch (error.code) {
           case "auth/user-not-found":
             setFirebaseError("No user found...");
             break;
           case "auth/wrong-password":
             setFirebaseError("wrong password");
             break;
           default:
             setFirebaseError(error.code);
             break;
         }
       },
       onSuccess(data) {
         console.log(data);
         navigate({ to: "/schools-management", replace: true });
       },
     });

    const onSubmit = ({ email, password }: any) => {
      mutation.mutate({ email, password });
    };



    return (
      <div
        className={tw`flex flex-col container mx-auto items-center space-y-0`}
      >
        <Image src={loginBGImage} className={tw`w-64 h-64`} />
        <Image src={logoImage} style={{ width: "190px", height: "180px" }} />
        <h1
          style={{ color: myTheme.palette.themePrimary }}
          className={tw`font-bold text-2xl`}
        >
          Login
        </h1>
        {showFBErrMsgBar && (
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={toggleShowFBErrMsgBar}
            dismissButtonAriaLabel="Close"
            className={tw`w-64`}
          >
            {firebaseError}
          </MessageBar>
        )}
        <form className={tw`w-64`} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            placeholder="test@test.com"
            iconProps={{
              iconName: "Mail",
              styles: { root: { color: myTheme.palette.themePrimary } },
            }}
            {...register("email", { required: true })}
            errorMessage={errors.password && "Required"}
          />
          <TextField
            label="Password"
            placeholder="********"
            type="password"
            canRevealPassword
            revealPasswordAriaLabel="Show password"
            {...register("password", { required: true })}
            errorMessage={errors.password && "Required"}
          />
          <PrimaryButton text="Login" className={tw`w-64 mt-2`} type="submit" />
        </form>
      </div>
    );
}