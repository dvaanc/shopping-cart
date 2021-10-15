import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
// import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';

const Parent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: visible;
`
function App() {
  return (
    <Router> 
      <Parent>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/store' component={Shop} />
        </Switch>
      </Parent>
    </Router>
  );
}

export default App;
