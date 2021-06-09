import React from 'react'
import './style.css'
const LoginLayout = ({ handelLogin }) => {
    return (
        <div className="container">
            <div className="main-area">
                <div className='login-form-container'>
                    <div className='brand-logo-md' />
                    <div className='login-forms'>
                        <label>USERNAME</label>
                        <input />
                        <label>PASSWORD</label>
                        <input type='password' />
                        <button onClick={handelLogin}>Login</button>
                    </div>
                </div>
            </div>
            <div className="footer-area">
                <span>dhl@20201</span>
            </div>
        </div>
    )
}

export default LoginLayout
