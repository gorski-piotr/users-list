import React from 'react';
import "./UsersList.css";
import User from "./User";

function UsersList({ users }) {

    // let usersList = props.usersList;
    //console.log(users)

    return (
        users.map((user) => {
            return (
                <ul className="p-0">
                    <User  user={user}/>
                </ul>
             )
        })
            
    )
}

export default UsersList
