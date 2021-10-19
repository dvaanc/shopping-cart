import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import close from '../../assets/close.png';
function Cart(props) {
  const [showCart, setShowCart] = React.useState({
    isToggled: 'hidden'
  });
  const [items, setItems] = React.useState([

  ])
  React.useEffect(() => {
    props.toggleCart.current = toggleCart;
    props.addToCart.current = addToCart;
    console.log(items)
  }, [items])

  const addToCart = (item) => {
    const isItemInCart = items.some((i) => i.name === item.name)
    if(isItemInCart) {
      const i = items.findIndex((i) => i.name === item.name)
      items[i].quantity += 1
      return setItems([...items]);
    }
    const itemToAdd = {
      name: item.name,
      price: item.price,
      img: item.img,
      quantity: 1,
    }
        setItems([ ...items, itemToAdd])
  }
  const toggleCart = () => {
    if(showCart.isToggled === 'hidden') return setShowCart({ isToggled: 'visible' });
    if(showCart.isToggled === 'visible') return setShowCart({ isToggled: 'hidden' })
  }
  const handleClick = (e) => {
    if(e.target.id === 'container') return toggleCart();
  }
  return (
    <div>
      <ThemeProvider theme={showCart}>
        <Parent id="container" onClick={handleClick}>
          <Content>
          <CartHeader>
            <h1>Cart</h1>
            <img src={close} alt='close cart'/>
          </CartHeader>
            
          </Content>
        </Parent>
      </ThemeProvider>
    </div>

  )
} 
export default Cart;

const Parent = styled.div`
  position: fixed;
  visibility: ${props => props.theme.isToggled};
  top: 0;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);

`

const Content = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  height: 100%;
  width: 500px;
  transition: right 0.85s ease-in-out 0s;
  background-color: #042435;
  color: #FFFFFF;
  z-index: 6;
`
const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 40px;
  box-shadow: 0 -1px rgb(255 255 255 / 25%) inset;
  & h1 {
    font-size: 26px;
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
`