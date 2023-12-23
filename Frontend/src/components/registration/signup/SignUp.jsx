import React, { useState } from "react";
import "./index.css";
import NameForm from "./NameForm";
import RoleType from "./RoleType";
import UsernameAndPasswordForm from "./UsernameAndPasswordForm";
import { LINKS, ROLES } from "../../../constants";
import { services } from "../../../service/services";
import { Link, useNavigate } from "react-router-dom";
import { isEmpty } from "../../../common/vaildation";

const initialData = {
  firstName: "",
  lastName: "",
  password: "",
  rePassword: "",
  email: "",
  type: ROLES.list[ROLES.AUTHOR_INDEX],
};
const resultsValid = (form, setter) => {
  let messages = [];
  if (isEmpty(form.email)) messages.push("Email field is empty!");
  if (isEmpty(form.firstName) || isEmpty(form.lastName))
    messages.push("First and Last names cannot be empty!");
  if (isEmpty(form.password)) messages.push("Password field cannot be empty!");
  if (form.password !== form.rePassword)
    messages.push("Passwords don't match!");
  if (messages.length !== 0) {
    setter(messages[0]);
  }
  console.log(messages);
  return messages.length === 0;
};
const SignUp = () => {
  const [form, setForm] = useState(initialData);
  const [errorMessage, setMessage] = useState("");
  const navigation = useNavigate();

  const setter = (state) => {
    setForm(state);
    console.log(form);
  };

  const submit = () => {
    if (!resultsValid(form, setMessage)) return;
    services.signInService
      .signUp(form)
      .then((response) => {
        navigation('/'+LINKS.HOME);
        console.log('Navigating...');
      })
      .catch((rejection) => {
        setMessage(rejection);
      });
  };
  return (
    <div>
      <form>
        <div className="signup-div">
          <div id="sign-up-form-div">
            <NameForm form={form} setter={setter} />
            <RoleType form={form} setter={setter} />
            <UsernameAndPasswordForm form={form} setter={setter} />
          </div>
        </div>
      </form>
      <div className="text-center">
        <div className="text-danger">{errorMessage}</div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={submit}>
            Submit
          </button>
          <Link to={LINKS.HOME}>
            <button type="button" class="btn btn-secondary">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
