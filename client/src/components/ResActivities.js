import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActivityCard from "./ActivityCard";

function ResActivities({activity, name}) {
  const { id } = useParams();
  const [resAct, setResAct] = useState([]);

//   useEffect(() => {
//     fetch(`${id}`)
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(data);
//         setResAct(data);
//       });
//   }, [id]);
console.log(activity, name)

  return (
    <div>
    <ActivityCard />
    </div>
  ) ;
}

export default ResActivities;
