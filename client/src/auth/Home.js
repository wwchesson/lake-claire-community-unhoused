import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import tree from "./media/tree.gif";
import rooftop from "./media/rooftop.jpg";
import leafbackdrop from "./media/leafbackdrop.png"

function Home({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <Container
        maxWidth="x-large"
        sx={{
          backgroundImage: `url(${leafbackdrop})`,
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
              lineHeight: "1.5",
              marginTop: "50px",
              marginBottom: "30px",
              backgroundColor: "#02c966",
            }}
          >
            <CardContent>
              {showSignUp ? (
                <>
                  {/* <SignupForm onLogin={onLogin} />
                  <br />
                  <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowSignUp(false)}>Log In</button>
                  </p> */}
                </>
              ) : (
                <>
                  <LoginForm onLogin={onLogin} />
                  <br />
                  {/* <Button
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
              </Button> */}

                  <Card
                    sx={{
                      backgroundColor: "#c47300",
                      width: "200px",
                      margin: "auto",
                      border: 1,
                      borderColor: "white",
                      borderRadius: "16px",
                      marginTop: "10px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" color="white">
                        Mock Login
                        <br />
                        un: jcameron1234
                        <br />
                        pw: jcameron1234
                      </Typography>
                    </CardContent>
                  </Card>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card
            sx={{
              display: "flex",
              height: "60vh",
              width: "40vh",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              marginTop: "20px"
            }}
          >
            <CardContent
              style={{
                backgroundImage: `url(${rooftop})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundColor: "orange",
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
                marginTop="5px"
                color="#593001"
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
                  "&:hover": {
                    backgroundColor: "#994302",
                  },
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
