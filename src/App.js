import React from 'react';
import Header from './components/Header/Header';
import CharacterName from './components/CharacterName/CharacterName';
import { Card, CardBody } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App appAlignment">
          <Header/>
          <Card>
            <CardBody>
              <CharacterName/>
            </CardBody>
          </Card>
    </div>
  );
}

export default App;
