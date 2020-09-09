import React from 'react'
import { connect } from "react-redux";
import { login, logout } from '../redux/auth/authActions'

function Login(props) {

    return (
        <div>
            <h2>Is Logged In- {props.loggedIn?'Yes':'No'}</h2>
            <button onClick={props.login}>Login</button>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       loggedIn: state.loggedIn 
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login)
