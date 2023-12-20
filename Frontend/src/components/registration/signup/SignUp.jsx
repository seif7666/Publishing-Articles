import React from "react";
import "./index.css";
import NameForm from "./NameForm";
import RoleType from "./RoleType";
import UsernameAndPasswordForm from "./UsernameAndPasswordForm";

const SignUp = () => {
  return (
    <div>
      <form>
        <div className="signup-div">
          <div id="sign-up-form-div">
            <NameForm />
            <RoleType />
            <UsernameAndPasswordForm />
          </div>
        </div>
      </form>
      <div className="text-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">
            Submit
          </button>
          <button type="button" class="btn btn-secondary">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
