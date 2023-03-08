import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {LoginCard} from "../components/StyleElements"
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import garden from "./garden.jpeg"

function Home ({onLogin}) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
        {/* <Card sx={{ bgcolor: "blue"}}>
            <CardContent
            sx={{
                margin: "auto",
            display: "flex",
            justifyContent: "center",
            maxWidth: "800px"
            }}
            >

            </CardContent>
        </Card> */}
        <Card sx={{ display: "flex"}}>
            <CardContent style={{ backgroundImage: `url(${garden})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "275px", width: "100vw", backgroundPosition: "center", justifyContent: "center", margin: "auto", display: "flex", }}>

                <Typography variant="h3" marginTop="200px" color="white"><strong>The Lake Claire Community for the Unhoused</strong></Typography>
            </CardContent>
        </Card>
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