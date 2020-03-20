import React, { useState, useEffect } from "react";
import StarCard from "./StarCard";
import axios from "axios";
import { Container, Row } from "reactstrap";
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
    <Container>
      <Row>
        {stars.map((props, index) => {
          return <StarCard props={props} key={index} />;
        })}
      </Row>
    </Container>
  );
}
