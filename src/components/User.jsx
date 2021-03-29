import React from 'react'

function User({user}) {
    return (
            <li key={Date.now()} className="user badge p-3 my-2 mx-auto d-flex justify-content-between" >
                <span className="text-wrap">{user.name}, { user.id }, {user}</span><span className="delete-name">X</span>
            </li>
    )
}

export default User
