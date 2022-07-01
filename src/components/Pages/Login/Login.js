import React from 'react'
import { Link } from 'react-router-dom'

import login_bg from '../../../images/login_bg.jpg'
import './Login.css'


export const Login = () => {
    document.title = "Sign In | Div.co Employee Management System"
    return (
        <>
        <div className="Login image-overlay"></div>
    <div className="Login container">
        <div className="card">
            <div className="image-side">
                <img src={login_bg} alt="" />
                <div className="image-overlay"></div>
            </div>
            <div className="login">
                <h1>Admin</h1>
                <h2>Login</h2>

                <form action="">
                    <div className="username">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="password">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <p>
                        <Link to="/">
                            Forgot Password?
                        </Link>
                    </p>
                    <input type="submit" value="LOGIN" />
                    <p>
                        <Link to="index.html">
                            Bypass Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
        </>
    )
}