import React from 'react';
import styled from 'styled-components';
import close from '../../assets/close.png';
import minus from '../../assets/minus.png';
import { v4 as uuidv4 } from 'uuid';

function Cart(props) {
  const [showCart, setShowCart] = React.useState(props.toggleCart);
  const [items, setItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setShowCart(props.toggleCart);
    props.addToCart.current = addToCart;
    getTotalNumber();
    getTotalCost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, props.toggleCart])

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
  // const toggleCart = () => {
  //   if(showCart.isToggled === 'hidden') return setShowCart({ isToggled: 'visible' });
  //   if(showCart.isToggled === 'visible') return setShowCart({ isToggled: 'hidden' })
  // }
  const handleClick = (e) => {
    if(e.target.id === 'container' || e.target.id === 'close') {
      setShowCart('hidden');
      props.handleClick();
    }
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
  const getTotalNumber = () => props.totalNumber(items.reduce((sum, item) => sum + item.quantity, 0));
  const getTotalCost = () => {
    const int = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotal(int);
  }
  return (
    <div>
        <Parent id="container" isToggled={showCart} onClick={handleClick}>
          <Content>
            <CartHeader>
              <h1>Cart</h1>
              <img id="close" src={close} alt='close cart'/>
            </CartHeader>
            <CartItemsContainer>
              { items.map((item) => {
                  const uuid = uuidv4();
                  return(
                    <CartItem key={uuid}>
                      <ImageWrapper>
                        <img draggable="false" src={item.img} alt="gmk nautilus"/>
                      </ImageWrapper>
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
                })  }
              <Total>
                <p>Total: ${total}</p>
              </Total>
              <Button>Checkout</Button>
            </CartItemsContainer>
          </Content>
        </Parent>
    </div>

  )
} 
export default Cart;

const Parent = styled.div`
  position: fixed;
  visibility: ${props => props.isToggled};
  top: 0;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  transition: visibility 2s ease-in;
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
  overflow-y: scroll;
  overflow-x: hidden;
`
const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  min-height: 20%;
  width: 100%;
  margin-bottom: 20px;
  user-select: none;
`
const ImageWrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 50%;
  margin-right: 10px;
  & img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
const Total = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 80%;
  cursor: pointer;
  font-size: 30px;
  color: white;
  margin-top: 20px;
  background-color: #3C454E;
`

