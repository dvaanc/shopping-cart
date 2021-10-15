import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
// import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';

const Parent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: visible;
`
function App(props) {
  return (
    <Router> 
      <Parent>
        <Switch>
          <Route exact path='/' component={Home} background="#141414"/>
          <Route exact path='/store' component={Store} background="#141414"/>
        </Switch>
      </Parent>
    </Router>
  );
}

export default App;
