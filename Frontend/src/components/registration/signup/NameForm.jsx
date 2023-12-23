import React from "react";

const NameForm = (props) => {
  return (
    <div className="sign-up-form-row">
      <div className="input-div">
        <label>First name:</label>
        <input type="text" placeholder="First Name" className="form-control" onChange={(e)=>{
          const newForm=props.form;
          newForm.firstName=e.target.value;
          props.setter(newForm);
        }}/>
      </div>
      <div className="input-div">
        <label>Last name:</label>
        <input type="text" placeholder="Last Name" className="form-control" onChange={(e)=>{
          const newForm=props.form;
          newForm.lastName=e.target.value;
          props.setter(newForm);
        }}/>
      </div>
    </div>
  );
};

export default NameForm;
