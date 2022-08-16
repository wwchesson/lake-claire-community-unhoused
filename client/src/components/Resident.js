import React, { useState, useEffect } from "react";
import { Card } from "./StyleElements";
import { Link } from "react-router-dom";

function Resident({ resident }) {
  const { id, name, date_of_birth, phone, email } = resident;

  const [res, setRes] = useState([])

  useEffect(() => {
    fetch(`/residents/${id}`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      setRes(data);
    })
  }, [id])
  
  function showDorm() {
    if (res.dorm != null) {
    return <h4>{res.dorm.name}</h4>
    } else {
      return <h4>No dorm</h4>
    }
  }

  function showActivities() {
    if (res.activities != null) {
      return <div>{res.activities.map(act => <h4 key={act.id}>{act.name}</h4>)}</div>
    } else {
      return <h4>No activities</h4>
    }
  }

  function showCounselor() {
    if (res.counselor != null) {
      return <h4>{res.counselor.name}</h4>
    } else {
      return <h4>No counselor</h4>
    }
  }

  return (
    
    <Card>
      
      <h3><strong>{name}</strong></h3>
      <h4>Date of Birth: {date_of_birth}</h4>
      <h4> Phone: {phone}</h4>
      <h4>Email Address: {email}</h4>
      <br />
      <h4>Activities: </h4>{showActivities()}
      <h4>Dorm:</h4>{showDorm()}    
      <h4>Counselor:</h4>{showCounselor()}

      <h4><Link to={`/residents/${id}`}>Click to update resident</Link></h4>          
    </Card>
  );
}

export default Resident;


