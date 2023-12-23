import React from "react";

const UsernameAndPasswordForm = (props) => {
  return (
    <table>
      <tr>
        <td>
          <label>Username:</label>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              props.form.email = e.target.value;
              props.setter(props.form);
            }}
          />
        </td>
      </tr>
      <br />
      <br />
      <tr>
        <td>
          <label>Password:</label>
        </td>
        <td>
          <input
            type="password"
            className="form-control"
            onChange={(e) => {
              props.form.password = e.target.value;
              props.setter(props.form);
            }}
          />
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <label>Password again:</label>
        </td>
        <td>
          <input
            type="password"
            className="form-control"
            onChange={(e) => {
              props.form.rePassword = e.target.value;
              props.setter(props.form);
            }}
          />
        </td>
      </tr>
    </table>
  );
};

export default UsernameAndPasswordForm;
