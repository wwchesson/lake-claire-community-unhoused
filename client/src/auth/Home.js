import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { LoginCard } from "../components/StyleElements";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { positions } from "@mui/system";
import garden from "./garden.jpeg";

function Home({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Card
          sx={{
            borderRadius: "16px",
            border: 1,
            borderColor: "grey.500",
            margin: "auto",
            width: 500,
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "30px",
            backgroundColor: "#03a329",
          }}
        >
          <CardContent>
            {showSignUp ? (<>
                <SignupForm onLogin={onLogin} />
                <br />
                <p>
                  Already have an account? &nbsp;
                  <button onClick={() => setShowSignUp(false)}>Log In</button>
                </p>
              </>) : (
              <>
              <LoginForm onLogin={onLogin} />
            <br />
            <p>
              Create an account &nbsp;
              <button onClick={() => setShowSignUp(true)}>Sign up</button>
            </p>
            </>
            )}



          </CardContent>
        </Card>
      ) : null}

      <Card sx={{ display: "flex" }}>
        <CardContent
          style={{
            backgroundImage: `url(${garden})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "40vw",
            width: "100vw",
            backgroundPosition: "center",
            justifyContent: "center",
            margin: "auto",
            display: "flex",
          }}
        >
          <Typography
            display="flex"
            variant="h3"
            marginTop="350px"
            color="white"
          >
            <strong>The Lake Claire Community for the Unhoused</strong>
          </Typography>
          <br />
          <Button
            onClick={() => setShowLogin(!showLogin)}
            sx={{ position: "fixed", top: "425px" }}
          >
            <Typography variant="h5" color="white">
              <strong>Login</strong>
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
