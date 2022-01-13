import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setLogin, storeInit } from "../store/actions"

const Login = props => {
    const dispatch = useDispatch()

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    useEffect(() => {
        dispatch(storeInit())
    }, [])

    const handleValidSubmit = () => {
        dispatch(setLogin({"email": email, "password": password}, props.history))
    }

    return (
        <React.Fragment>
            <h2>User Login</h2>

            <form>
                <label for="email">Email:</label><br />
                <input type="text" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} /><br />
                <label for="password">Password:</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} /><br /><br />
                <button type="button" class="btn btn-primary" onClick={handleValidSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Login
