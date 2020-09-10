import React from 'react'
import { login, logout } from '../redux/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'

function HooksLogin() {

    const loggedIn = useSelector(state => state.loggedIn)
    const dispatchLogin = useDispatch()
    const dispatchLogout = useDispatch()

    return (
        <div>
            <h2>Is Logged In- {loggedIn?'Yes':'No'}</h2>
            <button onClick={()=>dispatchLogin(login())}>Login</button>
            <button onClick={()=>dispatchLogout(logout())}>Logout</button>
        </div>
    )
}

export default HooksLogin
