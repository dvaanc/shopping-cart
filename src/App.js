import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';

const Parent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: darkblue;
`
function App() {

  const cartRef = React.useRef(null)
  let isToggle = false;
  const [blur, setBlur] = React.useState('hidden');
  const [showCart, setShowCart] = React.useState('-110%');
  const handleClick = (e) => {
    cartRef.current(e)
    if(!isToggle) {
      isToggle = true;
      setShowCart('visible');
      setShowCart('0');
    }

  }
  return (
      <Parent>
        <Header handleClick={handleClick}/>
        <Router> 
          <Switch>
            <Route exact path='/' component={Home} background="#141414"/>
            <Route exact path='/store' component={Store} background="#141414"/>
          </Switch>
        </Router>
        <Footer />
        <Cart toggleCart={cartRef} blur={showCart} showCart={blur} />
      </Parent>
  );
}

export default App;
