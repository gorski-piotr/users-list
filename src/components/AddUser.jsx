import React from 'react'

function AddUser() {
    return (
        <div className="d-flex justify-content-center">
            <input className="m-2" type="text" name="name" id="name" placeholder="User name"/>
            <buttton className="btn btn-primary m-2">Add name</buttton>
        </div>
    )
}

export default AddUser
