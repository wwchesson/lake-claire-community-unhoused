import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {LoginCard} from "../components/StyleElements"
import { Card, CardContent, Typography } from "@mui/material";

function Home ({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
        <Card sx={{ bgcolor: "blue"}}>
            <CardContent
            sx={{
                margin: "auto",
            display: "flex",
            justifyContent: "center",
            maxWidth: "800px"
            }}
            >
                <Typography
                variant="h4"
                color="white"
                >The Lake Claire Community for the Unhoused</Typography>
            </CardContent>
        </Card>
        <br />

        <h2 className="home-text">Manager Login Page</h2>
        <LoginCard>
            {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <br />
            <p>
            Create an account &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign up</button>
            </p>
            </>
        ) : (
            <>
            <SignupForm onLogin={onLogin} />
            <br />
            <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
            </p>
            </>
        ) }
        </LoginCard>


        </div>
    )
}

export default Home