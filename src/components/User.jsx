import React from 'react'
import "./User.css"

function User() {
    return (
        <li className="user badge p-3 my-2 mx-auto d-flex justify-content-between" >
            <span className="text-wrap">Name</span><span className="delete-name">X</span>
        </li>
    )
}

export default User
