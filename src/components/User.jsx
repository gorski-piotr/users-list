import React from "react";

function User(props) {
  return (
    <li
      key={props.user.key}
      className="user badge p-3 my-2 mx-auto d-flex justify-content-between"
    >
      <span className="text-wrap">{props.user.name}</span>
      <span className="delete-name">X</span>
    </li>
  );
}

export default User;
