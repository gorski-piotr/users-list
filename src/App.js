import Title from "./components/Title";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    console.log("prevUsers: ", users);
    console.log("newUser: ", newUser);

    setUsers((prevUsers) => {
      // console.log(prevUsers);
      //   return prevUsers.concat(newUser);
      return [...prevUsers, newUser];
    });
  };

  const removeUser = (userKey) => {
    console.log("current users: ", users);
    console.log("user removed (App.js): ", userKey);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return user.key !== userKey;
      });
    });
  };

  return (
    <div className="text-center mt-5">
      <Title />
      <AddUser addUserMethod={handleAddUser} />
      <UsersList users={users} removeUser={removeUser} />
    </div>
  );
}

export default App;
