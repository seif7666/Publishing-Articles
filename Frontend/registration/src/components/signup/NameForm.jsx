import React from "react";
import { ROLES } from "../../constants";

const NameForm = () => {
  return (
    <div className="sign-up-form-row">
      <div className="input-div">
        <label>First name:</label>
        <input type="text" placeholder="First Name" className="form-control" />
      </div>
      <div className="input-div">
        <label>Last name:</label>
        <input type="text" placeholder="Last Name" className="form-control" />
      </div>
    </div>
  );
};

export default NameForm;
