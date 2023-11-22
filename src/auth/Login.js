import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getUserEmail } from "./AuthAPIManager";
import noBgDice from "../img/noBgDice.png"


export const Login = () => {
    const [email, set] = useState("mre@faerun.net")
    // const [password, setPassword] = useState("12345");
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return getUserEmail(email)

            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("activeUser",
                        JSON.stringify({
                            id: user.id,
                        }))

                    navigate("/")
                }
                else {
                    window.alert("No Dice!")
                }
            })
    }

    return (
        <main className="container--login">
            <img src={noBgDice} alt="dice" className="logo"/>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Spell Review Book</h1>
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