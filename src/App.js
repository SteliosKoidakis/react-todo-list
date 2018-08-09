import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Input, Container, Row, Column } from './stelios-ui';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Container className="App-intro">
      <Row>
        <Column desktop="6">first col</Column>
        <Column desktop="6">second col</Column>
      </Row>
      <Row>
        <Button>Test</Button>
        <Input type="password" />
      </Row>
    </Container>
  </div>
);

export default App;
