import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {LoginCard} from "../components/StyleElements"

function Home ({onLogin, setLoggedIn}) {
    
    const [showLogin, setShowLogin] = useState(true); 

    return (
        <div>
        <h1 className="home-text">The Lake Claire Community for the Unhoused</h1>
        <br/>
        <h2 className="home-text">Manager Login Page</h2>
        <LoginCard>
            {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} setLoggedIn={setLoggedIn}/>
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