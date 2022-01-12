import React, { useState } from 'react'

const UserForm = props =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return(
        <>
            <form>
                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input type = "text" onChange ={ (e) => setFirstName(e.target.value) }></input> 
                </div>
                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input type = "text" onChange ={ (e) => setLastName(e.target.value) }></input> 
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type = "email" onChange ={ (e) => setEmail(e.target.value) }></input> 
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type = "password" onChange ={ (e) => setPassword(e.target.value) }></input> 
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input type = "password" onChange ={ (e) => setConfirmPassword(e.target.value) }></input> 
                </div>
            </form>
            <p>Your form data</p>
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm password: {confirmPassword}</p>
        </>
    )
}

export default UserForm