import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function LoginForm({onLogin, setLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user);
                    onLogin(user);
                })
                setLoggedIn(true);
                navigate("/residents");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <br/>
                <input 
                    type ="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input 
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
                {errors.map((err) => <h4>{err}</h4> )}
            </form>
        </div>
    )
}

export default LoginForm;
