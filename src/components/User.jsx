import React from "react";

function User(props) {
  const removeUser = () => {
    alert("user removed");
  };

  return (
    <li className="user badge p-3 my-2 mx-auto d-flex justify-content-between">
      <span className="text-wrap">{props.user.name}</span>
      <span onClick={removeUser} className="delete-name">
        X
      </span>
    </li>
  );
}

export default User;
