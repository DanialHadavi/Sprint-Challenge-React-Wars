import React, { useState, useEffect } from "react";
import StarCard from "./StarCard";
import axios from "axios";
export default function StarList(props) {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setStars(response.data.results);
      })
      .catch(error => {
        console.log("there is an error", error);
      });
  }, []);
  return (
    <div className="card">
      {stars.map(props => {
        return <StarCard props={props} />;
      })}
    </div>
  );
}
