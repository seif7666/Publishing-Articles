import React, { useState } from "react";
import { ROLES } from "../../../constants";

const RoleType = (props) => {
  const [checkedValue, setCheckedValue] = useState(ROLES.list[ROLES.AUTHOR_INDEX]);
  
  const onSelect = (e) => {
    setCheckedValue(e.target.value);
    props.form.type = e.target.value;
    props.setter(props.form);
  };
  return (
    <div
      className="sign-up-form-row"
      style={{ justifyContent: "flex-start", alignContent: "center" }}
    >
      <div>
        <span style={{ fontSize: "large", fontWeight: 400 }}>
          What is your job?
        </span>
      </div>
      <div style={{ paddingLeft: 20, display: "flex" }}>
        {ROLES.list.map((role) => {
          if (role === ROLES.list[ROLES.ADMIN_INDEX]) return;
          return (
            <div style={{ margin: 20, justifyContent: "space-between" }}>
              <label style={{ margin: 10 }}>{role}</label>
              {checkedValue== role && (
                <input
                  type="radio"
                  name="role"
                  value={role}
                  onChange={onSelect}
                  checked
                />
              )}
              {checkedValue !== role &&
              <input
              type="radio"
              name="role"
              value={role}
              onChange={onSelect}
              />
            }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoleType;
