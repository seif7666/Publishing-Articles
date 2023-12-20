import React from "react";

const UsernameAndPasswordForm = () => {
  return (
    <table >
      <tr>
        <td>
          <label>Username:</label>
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
      </tr>
      <br/><br/>
      <tr>
        <td>
          <label>Password:</label>
        </td>
        <td>
          <input type="password" className="form-control" />
        </td>
      </tr>
      <br/>
      <tr>
        <td>
          <label>Password again:</label>
        </td>
        <td>
          <input type="password" className="form-control" />
        </td>
      </tr>
    </table>
  );
};

export default UsernameAndPasswordForm;
