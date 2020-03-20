import React, { useState } from "react";

export default function StarCard({ props }) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hair_color}</p>
        <p>Skin Color: {props.skin_color}</p>
        <p>Eye Color: {props.eye_color}</p>
        <p>Birth Year: {props.birth_year}</p>
        <p>Gende: {props.gender}</p>
      </div>
    </div>
  );
}
