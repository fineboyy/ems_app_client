import React from 'react'
import { Link } from 'react-router-dom'

import login_bg from '../../../images/login_bg.jpg'
import './Login.css'


export const Login = () => {
    return (
        <>
        <div class="Login image-overlay"></div>
    <div class="Login container">
        <div class="card">
            <div class="image-side">
                <img src={login_bg} alt="" />
                <div class="image-overlay"></div>
            </div>
            <div class="login">
                <h1>Admin</h1>
                <h2>Login</h2>

                <form action="">
                    <div class="username">
                        <label for="username"></label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div class="password">
                        <label for="password"></label>
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