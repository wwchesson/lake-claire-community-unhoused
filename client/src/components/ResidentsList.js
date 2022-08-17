import React, {useEffect, useState} from "react";
import { Tiles, H3 } from "./StyleElements";
import Resident from "./Resident";

function ResidentsList({residents}) {
  const [activity, setActivity] = useState([])
  
  useEffect(() => {
    fetch("/activities")
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      setActivity(data)
    })
  }, [])

  return (
    <div className="residents">
      <H3>Residents</H3>
      <Tiles>
        {residents.map((resident) => (
          <Resident
            key={resident.id}
            resident={resident}
            act={activity.filter((act) => act.resident_id === resident.id)}
          />
        ))}
        
      </Tiles>
    </div>
  );
}

export default ResidentsList;
