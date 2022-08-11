import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ResidentsList from "./ResidentsList";
import NavBar from "./NavBar";
import ResidentIntake from "./ResidentIntake";
import Activities from "./Activities";
import Home from "../auth/Home";
import ResidentUpdate from "./ResidentUpdate";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setLoggedIn(true);
      }
    });
  }, []);

  if (!user) return <Home onLogin={setUser} />;

 

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home onLogin={setUser} user={user} setLoggedIn={setLoggedIn}/>} />
        <Route
          path="/residents"
          element={
            <ResidentsList loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          //   residents={residents} setFormData={setFormData}
          //  onUpdateResident={handleUpdateResident} onDeleteResident = {handleDeleteResident}
          }
        />
        <Route
          path="/resident_intake"
          element={
            <ResidentIntake
              // formData={formData}
              // setFormData={setFormData}
              // onAddResident={handleAddResident}
            />
          }
        />
        {/* <Route path="/residents/:id" element={<Activities/>}></Route> */}
        <Route path="/residents/:id" element={<ResidentUpdate/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

