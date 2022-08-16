import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ResidentsList from "./ResidentsList";
import NavBar from "./NavBar";
import ResidentIntake from "./ResidentIntake";
import Home from "../auth/Home";
import ResidentUpdate from "./ResidentUpdate";

function App() {
  const [user, setUser] = useState(null);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetch("/residents")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setResidents(data);
      });
  }, []);

  function handleAddResident(newResident) {
    setResidents([...residents, newResident]);
  }

  function handleUpdateResident(updatedResident) {
    const updatedResidents = residents.map((resident) =>
      resident.id === updatedResident.id ? updatedResident : resident
    );
    setResidents(updatedResidents);
  }

  function handleDeleteResident(id) {
    const deleteResident = residents.filter((resident) => resident.id !== id);
    setResidents(deleteResident);
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Home onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home onLogin={setUser} user={user} />} />
        <Route
          path="/residents"
          element={
            <ResidentsList residents={residents}/>
          }
        />
        <Route
          path="/resident_intake"
          element={
            <ResidentIntake
              onAddResident={handleAddResident}
            />
          }
        />
        <Route path="/residents/:id" element={<ResidentUpdate onUpdateResident={handleUpdateResident}
        onDeleteResident={handleDeleteResident}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;

