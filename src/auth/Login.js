import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {getUserEmail} from "./AuthAPIManager";
import "./Login.css";


export const Login = () => {
    const [email, set] = useState("spaceball1@schwartz.gov")
    const [password, setPassword] = useState("12345");
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return getUserEmail(`http://localhost:8088/users/${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("activeUser", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                <h1>Nutshell</h1>
                    <h5>Please sign in</h5>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control-sm"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="signIn">
                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}