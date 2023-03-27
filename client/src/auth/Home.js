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
import flowers from "./flowers.jpeg";
import tree from "./tree.gif";

function Home({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <Container
        maxWidth="x-large"
        sx={{
          backgroundImage: `url(${tree})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          position: "fixed",
        }}
      >
        {showLogin ? (
          <Card
            sx={{
              borderRadius: "16px",
              border: 1,
              borderColor: "grey.500",
              margin: "auto",
              width: 300,
              display: "flex",
              // justifyContent: "center",
              // alignContent: "center",
              lineHeight: "1.5",
              marginTop: "100px",
              marginBottom: "30px",
              backgroundColor: "#02c966",
            }}
          >
            <CardContent
            >
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
                  <Button
                onClick={() => setShowSignUp(true)}
                sx={{
                  display: "flex",
                  border: 1,
                  borderColor: "white",
                  cursor: "pointer",
                  margin: "auto",
                  backgroundColor: "#c47300",
                  justifyContent: "center",
                  alignItems: "end",
                  position: "relative",
                  '&:hover': {
                    backgroundColor: "#994302"
                  }
                }}
              >
                <Typography variant="h5" color="white">
                  <strong>Sign up</strong>
                </Typography>
              </Button>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card
            sx={{
              display: "flex",
              height: "75vh",
              width: "75vh",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <CardContent
              style={{
                backgroundImage: `url(${flowers})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
                backgroundPosition: "center",
                justifyContent: "center",
                margin: "auto",
                // display: "flex",
              }}
            >
              <Typography
                margin="auto"
                variant="h4"
                marginTop="40px"
                color="#994302"
                justifyContent="center"
                textAlign="center"
              >
                <strong>The Lake Claire Community</strong>
                <br />
                <strong>for the Unhoused</strong>
              </Typography>
              <br />
              <Button
                onClick={() => setShowLogin(!showLogin)}
                sx={{
                  display: "flex",
                  border: 1,
                  borderColor: "white",
                  cursor: "pointer",
                  margin: "auto",
                  backgroundColor: "#994302",
                  justifyContent: "center",
                  alignItems: "end",
                  position: "relative",
                  '&:hover': {
                    backgroundColor: "#994302"
                  }
                }}
              >
                <Typography variant="h5" color="white">
                  <strong>Login</strong>
                </Typography>
              </Button>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default Home;
