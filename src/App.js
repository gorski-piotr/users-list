import Title from "./components/Title";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (newName) => {
    console.log(newName);
    let stringName = newName.toString();
    console.log(stringName);
    setUsers([...users, stringName]);
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
