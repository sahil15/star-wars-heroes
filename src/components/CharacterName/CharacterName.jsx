import React, { useState } from "react";
import {
  Row, Col, Button,
  CardTitle, FormGroup, Input
} from 'reactstrap';
import CharacterDesc from "../CharacterDesc/CharacterDesc";
function CharacterName() {


  const [starWarHero, setstarWarHero] = useState("");
  const [descComponent, setDescComponent] = useState(false);

  const handleInputChange = (e) => {
    setstarWarHero(e.currentTarget.value);
    setDescComponent(false);
  };
  return (
    <>
      <CardTitle className="text-float-left">Character Name
        <FormGroup>
          <Row>
            <Col sm={10}>
              <Input type="text" name="search" onChange={handleInputChange} placeholder="Type name of the Star Wars Hero" />
            </Col>
            <Col sm={2}>
              <Button type="button" onClick={() => setDescComponent(true)} color="primary" >Search</Button>
            </Col>
          </Row>
        </FormGroup>
      </CardTitle>
      { descComponent &&
        <CharacterDesc characterName={starWarHero} />
      }
    </>
  );
}

export default CharacterName;