import Title from "./components/Title";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    console.log("users: ", users);
    console.log("newUser: ", newUser);

    setUsers((prevUsers) => {
      // console.log(prevUsers);
      //   return prevUsers.concat(newUser);
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className="text-center mt-5">
      <Title />
      <AddUser addUserMethod={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
