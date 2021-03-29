import React from 'react'

function AddUser() {
    return (
        <div className="d-flex justify-content-center">
            <input className="m-2" type="text" name="name" id="name" placeholder="User name"/>
            <button className="btn btn-primary m-2">Add name</button>
        </div>
    )
}

export default AddUser
