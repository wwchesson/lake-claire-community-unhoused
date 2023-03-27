import React, {useState} from "react";


function SignupForm({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="first_name">First Name</label>
                <br />
                <input
                    type="text"
                    id="first_name"
                    autoComplete="off"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <br />
                <label htmlFor="last_name">Last Name</label>
                <br />
                <input
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <br />
                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="text"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password Confirmation</label>
                <br />
                <input
                    type="text"
                    id="password_confirmation"
                    autoComplete="current-password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br />
                <button type="submit">Sign up</button>
                {errors.map((err) => <h4>{err}</h4> )}
            </form>
        </div>
    )
}

export default SignupForm;