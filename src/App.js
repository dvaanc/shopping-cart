import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import Cart from './components/cart/Cart';
import Footer from './components/Footer';

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-width: 500px;
  min-height: 100%;
  width: 100%;
  height: auto;
  background-color: darkblue;
`
function App() {
  const [toggleCart, setToggleCart] = React.useState('hidden');
  const addToCartRef = React.useRef(null);
  const totalNumberRef = React.useRef(null);
  const handleClick = () => { 
    toggleCart === 'hidden' ? setToggleCart('visible') : setToggleCart('hidden');
  }
  const addToCart = (item) => addToCartRef.current(item);
  const totalNumber = (int) => totalNumberRef.current(int)
  return (
      <Parent>
        <HashRouter> 
        <Header handleClick={handleClick} totalNumber={totalNumberRef}/>
          <Switch>
            <Route 
            exact 
            path='/'
            component={Home} 
            />
            <Route 
            exact 
            path='/store'
            render={() => <Store addToCart={addToCart} background="#141414" />}
            />
          </Switch>
        </HashRouter>
        <Footer />
        <Cart 
        totalNumber={totalNumber} 
        handleClick={handleClick} 
        toggleCart={toggleCart} 
        addToCart={addToCartRef}/>
      </Parent>
  );
}

export default App;
