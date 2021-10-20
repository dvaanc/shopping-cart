import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import close from '../../assets/close.png';
import gmkNautilus from '../../assets/gmknautilusbasekit.png';
import minus from '../../assets/minus.png';
import { v4 as uuidv4 } from 'uuid';
function Cart(props) {
  const [showCart, setShowCart] = React.useState({
    isToggled: 'hidden'
  });
  const [items, setItems] = React.useState([
    {
      name: 'GMK Nautilus',
      price: 99,
      img: gmkNautilus,
      quantity: 1,
    }
  ])
  React.useEffect(() => {
    props.toggleCart.current = toggleCart;
    props.addToCart.current = addToCart;
  })

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
  const subtractOrder = (e) => {
    let itemName = e.target.parentNode.parentNode.childNodes[0].innerText;
    if(e.target.tagName.toLowerCase() === 'img') itemName = e.target.parentNode.parentNode.parentNode.childNodes[0].innerText;
    const i = items.findIndex((item) => item.name === itemName)
    items[i].quantity--;
    if(items[i].quantity === 0) deleteItem(i);
    setItems([...items]);
  }
  const addOrder = (e) => {
    const itemName = e.target.parentNode.parentNode.childNodes[0].innerText;
    const i = items.findIndex((item) => item.name === itemName);
    items[i].quantity++;
    setItems([...items]);
  }
  const deleteItem = (i) => items.splice(i, 1);
  return (
    <div>
      <ThemeProvider theme={showCart}>
        <Parent id="container" onClick={handleClick}>
          <Content>
            <CartHeader>
              <h1>Cart</h1>
              <img onClick={toggleCart} src={close} alt='close cart'/>
            </CartHeader>
            <CartItemsContainer>
              {
                items.map((item) => {
                  const uuid = uuidv4();
                  return(
                    <CartItem key={uuid}>
                      <img src={item.img} alt="gmk nautilus"/>
                      <CartItemText>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                      <ChangeOrderQuantity>
                        <div onClick={subtractOrder}>
                          <img src={minus} alt="minus"/>
                        </div>
                        <div>{item.quantity}</div>
                        <div onClick={addOrder}>+</div>
                      </ChangeOrderQuantity>
                      </CartItemText>
                    </CartItem>
                  )
                })
              }
            </CartItemsContainer>
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
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  display: flex;
  height: 100%;
  width: 500px;
  transition: right 0.85s ease-in-out 0s;
  background-color: #F8F8F8;
  color: black;
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
  box-shadow: 0 -1px rgb(0 0 0 / 25%) inset;
  & h1 {
    font-size: 26px;
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
  & img {
    cursor: pointer;
  }
`
const CartItemsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`
const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  min-height: 20%;
  width: 100%;
  & img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }
`
const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h4 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`
const ChangeOrderQuantity = styled.div`
  margin-top: 20px;
  display: grid;
  width: 100%;
  height: 35px;
  grid-template-columns: [first] 35px [second] auto [third] 35px;
  background-color: pink;
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D4D4D4;
    user-select: none;
    &:nth-child(2) {
      background-color: #F8F8F8;
      font-size: 20px;
      font-weight: bold;
    }
    &:nth-child(1):hover {
      cursor: pointer;
    }
    &:nth-child(3) {
      font-size: 30px;
      &:hover {
        cursor: pointer;
      }
    }

  }
`

