import logo from '../assets/logo.png';
import styled from 'styled-components';
import shoppingCart from '../assets/shoppingcart.png';
import React from 'react';

function Header(props) {
  const [cartNo, setCartNo] = React.useState();
  
  React.useEffect(() => {
    props.totalNumber.current = updateCartNo
  })
  const updateCartNo = (int) => setCartNo(int);
  
  return (
      <Nav>
        <Wrapper>
          <ImageWrapper>
            <img src={logo} alt='logo' draggable="false" />
          </ImageWrapper>
          <div>
          <ShoppingCart onClick={props.handleClick}>
            <ImageWrapper>
              <img src={shoppingCart} alt='shopping cart' draggable="false"/>
            </ImageWrapper>
            <CartNumber>
              <p>{cartNo}</p>
            </CartNumber>
          </ShoppingCart>
          </div>

        </Wrapper>
        <List>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/store'>STORE</a>
          </li>
        </List>
      </Nav>
  )
}

const Nav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  background-color: #141414;
  user-select: none;
  box-shadow: 0 -1px rgb(255 255 255 / 25%) inset;
  transition: background .3s ease-in-out, box-shadow .3s ease-in-out;
  z-index: 3;
  overflow: visible;
  font-family: 'NunitoSans', sans-serif;
  font-size: 30px;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
`
const ImageWrapper = styled.div `
  min-width: 15%;
    &:hover {
      cursor: pointer;
    }
    & img {
      width: 100%;
      height: 100%;
    }
`
const ShoppingCart = styled.div `
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  transition: background .3s ease-in-out, transform .3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CartNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  right: 15px;
  background-color: #BF1535;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 30px;
  list-style-type: none;
  & li {
    padding: 2px;
    margin-left: 21px;
    margin-right: 21px;
    text-transform: uppercase;
    & a {
      color: #ffffff;
      text-decoration: none;
      letter-spacing: .2em;
      font-size: 25px;
      &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #000;
      background-color: #ffffff;
      transition: width .1s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
`

export default Header;