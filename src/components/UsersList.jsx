import React from "react";
import "./UsersList.css";
import User from "./User";

function UsersList(props) {
  let usersList = props.users.map((user) => {
    return <User key={user.key} user={user} />;
  });

  //console.log(users)

  return <ul className="p-0">{usersList}</ul>;
}

export default UsersList;
