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
  const toggleCartRef = React.useRef(null);
  const addToCartRef = React.useRef(null);
  const totalNumberRef = React.useRef(null);
  const handleClick = (e) => toggleCartRef.current(e);
  const addToCart = (item) => addToCartRef.current(item);
  const totalNumber = (int) => totalNumberRef.current(int)
  return (
      <Parent>
        <Header handleClick={handleClick} totalNumber={totalNumberRef}/>
        <Router> 
          <Switch>
            <Route 
            exact 
            path='/shopping-cart/' 
            component={Home} 
            />
            <Route 
            exact 
            path='/shopping-cart/store' 
            render={() => <Store addToCart={addToCart} background="#141414" />}
            />
          </Switch>
        </Router>
        <Footer />
        <Cart totalNumber={totalNumber} toggleCart={toggleCartRef} addToCart={addToCartRef}/>
      </Parent>
  );
}

export default App;
