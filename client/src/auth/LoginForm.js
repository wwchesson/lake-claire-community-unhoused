import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { textAlign } from "@mui/system";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          onLogin(user);
        });
        navigate("/residents");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "15ch" },
            margin: "auto",
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              marginBottom: "10px",
              backgroundColor: "white",
              justifyContent: "center",
              alignContent: "center",
            }}
            id="outlined-username-input"
            label="Username"
            variant="outlined"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "10px", backgroundColor: "white" }}
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <br />

        <button className="btn" type="submit">
          Login
        </button>
        {errors.map((err) => (
          <h4>{err}</h4>
        ))}
      </form>
    </div>
  );
}

export default LoginForm;
