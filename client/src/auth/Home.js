import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { LoginCard } from "../components/StyleElements";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { positions } from "@mui/system";
import garden from "./garden.jpeg";
import tree from "./tree.gif";

function Home({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <Container
        sx={{
          backgroundImage: `url(${tree})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100px",
        }}
      >
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
              {showSignUp ? (
                <>
                  <SignupForm onLogin={onLogin} />
                  <br />
                  <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowSignUp(false)}>Log In</button>
                  </p>
                </>
              ) : (
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
      </Container>

      <Card sx={{ display: "flex" }}>
        <CardContent
          style={{
            backgroundImage: `url(${garden})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "80vh",
            width: "90vw",
            backgroundPosition: "center",
            justifyContent: "center",
            margin: "auto",
            // display: "flex",
          }}
        >
          <Typography
            display="flex"
            variant="h4"
            marginTop="350px"
            color="white"
            justifyContent="center"
            alignContent="center"
          >
            <strong>The Lake Claire Community for the Unhoused</strong>
          </Typography>
          <br />
          <Button
            onClick={() => setShowLogin(!showLogin)}
            sx={{
              display: "flex",
              border: 1,
              borderColor: "white",
              cursor: "crosshair",
              margin: "auto",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
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
