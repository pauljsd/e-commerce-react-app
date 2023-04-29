import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signup/SignUp";
import "./sign-in-up.scss";

const SignInUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
