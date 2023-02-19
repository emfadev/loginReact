import React from "react"
import "./styleLogin.css"

export const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__header">Login</h2>
                <form className="login__form">
                    <div className="login__field">
                        <label className="login__label">Username</label>
                        <input className="login__input" type="text" />
                    </div>
                    <div className="login__field">
                        <label className="login__label">Password</label>
                        <input className="login__input" type="password" />
                    </div>
                    <button className="btnGlobal" type="submit">Login</button>
                </form>
                <div>
                    <p>or with:</p>
                    <div>
                        <button>F</button>
                        <button>G</button>
                        <button>T</button>
                    </div>
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    )
}
