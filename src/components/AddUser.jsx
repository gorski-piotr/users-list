import React, { useState } from "react";

const AddUser = (props) => {
  const [newName, setName] = useState("");

  const handleAddUser = () => {
    //console.log(newName);

    if (newName.trim() === "") {
      alert("User name is required!");
    } else {
      let newUser = {
        key: Date.now(),
        name: newName,
      };

      //console.log(newUser)
      props.addUserMethod(newUser);
      setName("");
    }
  };

  const handleChangeName = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        onChange={handleChangeName}
        value={newName}
        className="m-2"
        type="text"
        name="name"
        id="name"
        placeholder="User name"
      />
      <button onClick={handleAddUser} className="btn btn-primary m-2">
        Add name
      </button>
    </div>
  );
};

export default AddUser;
