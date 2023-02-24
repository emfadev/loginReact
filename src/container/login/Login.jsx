import React, { useState } from "react"
import { Facebook, GitHub, Google } from "../../svg/Icons"
import "./styleLogin.css"

export const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        };
        fetch('https://backend-login-puce.vercel.app/', requestOptions)
            .then(response => response.json())
            .then(data => localStorage.setItem("user", data.token))
            .catch(error => console.error(error));
    }

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__header">Login</h2>
                <form className="login__form" onSubmit={handleLogin}>
                    <div className="login__field">
                        <label className="login__label">Username</label>
                        <input className="login__input"
                               type="text"
                               onChange={(event) => setUser(event.target.value)}
                               required
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__label">Password</label>
                        <input className="login__input"
                               type="password"
                               onChange={(event) => setPass(event.target.value)}
                               required
                        />
                    </div>
                    <button className="btnGlobal" type="submit" >Login</button>
                </form>
                <div>
                    <p>or with:</p>
                    <div>
                        <button className="login__buttonSocial"><Facebook size={'2.5rem'} /></button>
                        <button className="login__buttonSocial"><GitHub size={'2.5rem'} /></button>
                        <button className="login__buttonSocial"><Google size={'2.5rem'} /></button>
                    </div>
                </div>
                <button className="login__buttonCheckIn">Sign Up</button>
            </div>
        </div>
    )
}
