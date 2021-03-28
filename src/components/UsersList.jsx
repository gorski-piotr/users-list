import React from 'react';
import User from "./User"


function UsersList() {
    return (
        <div >
            <ul className="p-0">
                <User />
                <User />
                <User />
                <User />
            </ul>
        </div>
    )
}

export default UsersList
