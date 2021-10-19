import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import Cart from './components/cart/Cart';
import Footer from './components/Footer';

const Parent = styled.div`
  height: 100%;
  width: 100%;
  background-color: darkblue;
`
function App() {
  const toggleCartRef = React.useRef(null)
  const addToCartRef = React.useRef(null)
  // let isToggle = false;
  // const [blur, setBlur] = React.useState('hidden');
  // const [showCart, setShowCart] = React.useState('-110%');
  const handleClick = (e) => toggleCartRef.current(e);
  const addToCart = (item) => addToCartRef.current(item);
  return (
      <Parent>
        <Header handleClick={handleClick}/>
        <Router> 
          <Switch>
            <Route 
            exact 
            path='/' 
            component={Home} 
            // render={() => <Home />}
            />
            <Route 
            exact 
            path='/store' 
            // component={Store} 
            render={() => <Store addToCart={addToCart} background="#141414" />}
            />
          </Switch>
        </Router>
        <Footer />
        <Cart toggleCart={toggleCartRef} addToCart={addToCartRef}/>
      </Parent>
  );
}

export default App;
