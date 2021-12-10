import { MessageBar, MessageBarType, PrimaryButton, TextField } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-location";
import { tw } from "twind"
import backgroundImage from '../../../../assets/Login.svg'
import { auth } from "../../../../firebase";
import myTheme from "../../../../theme";
import { Loading } from "../../common/loading";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
     const [showFBErrMsgBar, { toggle: toggleShowFBErrMsgBar }] =
       useBoolean(false);

     const [showLoading, { toggle: toggleLoading }] = useBoolean(false);
     const [firebaseError, setFirebaseError] = useState("");
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();

     const navigate = useNavigate();

     const mutation = useAuthSignInWithEmailAndPassword(auth, {
       onError(error) {
         toggleLoading();
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
         toggleLoading();
         console.log(data);
         navigate({ to: "/schools-management", replace: true });
       },
     });

     const onSubmit = ({ email, password }: any) => {
       toggleLoading();
       debugger;
       mutation.mutate({ email, password });
     };

    return (
      <div className={tw`flex flex-row items-center h-screen box-border p-20`}>
        {showLoading && <Loading />}
        <div
          className={tw`w-1/2 h-full bg-no-repeat bg-cover`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className={tw`flex flex-col`}>
          <h1
            className={tw`text-lg font-bold text-center`}
            style={{ color: myTheme.palette.themePrimary }}
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
              label="Email:"
              placeholder="test@test.com"
              iconProps={{
                iconName: "Mail",
                styles: { root: { color: myTheme.palette.themePrimary } },
              }}
              {...register("email", { required: true })}
              errorMessage={errors.email && "Required"}
            />
            <TextField
              label="Password:"
              placeholder="*******"
              type="password"
              canRevealPassword
              revealPasswordAriaLabel="Show password"
              {...register("password", { required: true })}
              errorMessage={errors.password && "Required"}
            />
            <PrimaryButton className={tw`mt-5`} text="Login" type="submit" />
          </form>
        </div>
      </div>
    );
}