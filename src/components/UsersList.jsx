import React from "react";
import "./UsersList.css";
import User from "./User";

function UsersList(props) {
  const removeUser = (userKey) => {
    // console.log("user removed (UsersList): ", userID);
    props.removeUser(userKey);
  };

  let usersList = props.users.map((user) => {
    return <User key={user.key} user={user} removeUser={removeUser} />;
  });

  console.log("users updated: ", props.users);

  return <ul className="p-0">{usersList}</ul>;
}

export default UsersList;
