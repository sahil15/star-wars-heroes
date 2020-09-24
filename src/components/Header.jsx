import React from 'react';
import {
  Row, Col, Card, CardHeader, CardBody, Button,
  CardTitle, Form, FormGroup, Input, ListGroupItem, ListGroup
} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card>
        <CardHeader>STAR WAR HEROES</CardHeader>
        <CardBody>
          <CardTitle className="text-float-left">Character Name
                <Form>
              <FormGroup>
                <Row>
                  <Col sm={10}>
                    <Input type="text" name="search" id="searchStarWarhero" placeholder="Star War Hero Placeholder" />
                  </Col>
                  <Col sm={2}>
                    <Button color="primary" onClick={() => console.log("searched value")}>Search</Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </CardTitle>
          <div>
            <Card>
              <CardHeader>Header</CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="text-float-left padding-left-30">Cras justo odio <span className="float-right padding-right-50">Text</span></ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Morbi leo risus</ListGroupItem>
                  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>

    </div>
  );
}

export default App;
