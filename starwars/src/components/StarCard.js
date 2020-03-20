import React from "react";
import { Card, CardBody, CardText, Col } from "reactstrap";
import styled from "styled-components";

const Contain = styled.div`
  padding: 10px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h4`
  background: #000000;
  padding: 5px;
  color: white;
`;

export default function StarCard({ props }) {
  return (
    <Col xs="6" md="4" xl="3">
      <Contain>
        <Card>
          <Title>{props.name}</Title>
          <CardBody>
            <CardText>Height: {props.height}</CardText>
            <CardText>Mass: {props.mass}</CardText>
            <CardText>Hair Color: {props.hair_color}</CardText>
            <CardText>Skin Color: {props.skin_color}</CardText>
            <CardText>Eye Color: {props.eye_color}</CardText>
            <CardText>Birth Year: {props.birth_year}</CardText>
            <CardText>Gender: {props.gender}</CardText>
          </CardBody>
        </Card>
      </Contain>
    </Col>
  );
}
