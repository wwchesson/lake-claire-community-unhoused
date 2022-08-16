import React from "react";
import { Tiles, H3 } from "./StyleElements";
import Resident from "./Resident";

function ResidentsList({residents}) {

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
        
      </Tiles>
    </div>
  );
}

export default ResidentsList;
