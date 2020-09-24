import React, { useState, useEffect } from "react";
import capitalize from "capitalize";
import {
  Card, CardHeader, CardBody,
  ListGroupItem, ListGroup
} from 'reactstrap';
import axios from 'axios';


function CharacterDesc(props) {


  const [starWarHeorDesc, setStarWarHeroDesc] = useState({});
  const [characterName, setCharacterName] = useState("Loading...");



  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?search=${props.characterName}`).then((response) => {
      
      if (response.data.results.length > 0) {
        setCharacterName(response.data.results[0].name);
        setStarWarHeroDesc({
          "Gender": response.data.results[0].gender,
          "Birth Year": response.data.results[0].birth_year,
          "Height": response.data.results[0].height,
          "Mass": response.data.results[0].mass,
          "Color": response.data.results[0].hair_color
        });

      } else {
        setCharacterName("Star War Hero Name doesn't match");
      }
    }).catch((error) => {
      setCharacterName("Failed to Retrieve Data");
    });
    
  },[setStarWarHeroDesc,setCharacterName,props.characterName]);


  const getPrintableData = () => {
    return Object.keys(starWarHeorDesc).map((keyRef, index) => {
      return <ListGroupItem key={index} className="text-float-left padding-left-30">
        <label>{keyRef}</label>
        <span className="float-right padding-right-50">{capitalize(starWarHeorDesc[keyRef])}</span></ListGroupItem>
    });
  }

  return (
    <div>
      <Card>
        <CardHeader>{characterName}</CardHeader>
        <CardBody>
          <ListGroup>
            {getPrintableData()}
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterDesc;