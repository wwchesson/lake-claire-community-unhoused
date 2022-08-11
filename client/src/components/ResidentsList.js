import React, { useState, useEffect } from "react";
import { Tiles, H3 } from "./StyleElements";
import Resident from "./Resident";
import ResidentUpdate from "./ResidentUpdate";
import ResidentIntake from "./ResidentIntake"


function ResidentsList() {
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

  return (
    <div className="residents">
      <H3>Residents</H3>
      <Tiles>
        {residents.map((resident) => (
          <Resident
            key={resident.id}
            resident={resident}
          />
        ))}
        {residents.map((resident) => (
            <ResidentUpdate 
            key={resident.id}
            onUpdateResident={handleUpdateResident}
            onDeleteResident={handleDeleteResident}
            />
        ))}
        {residents.map(resident => (
            <ResidentIntake 
            key={resident.id}
            onAddResident={handleAddResident}
            />
        ))}
      </Tiles>
    </div>
  );
}

export default ResidentsList;
