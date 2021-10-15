import logo from '../assets/logo.png';
import styled from 'styled-components';
import shoppingCart from '../assets/shoppingcart.png';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 17vh;
  user-select: none;
  width: 100%;
  box-shadow: 0 -1px rgb(255 255 255 / 25%) inset;
  background-color: ${props => props.background};
  transition: background .3s ease-in-out, box-shadow .3s ease-in-out;
  top: 0;
  z-index: 5;
  overflow: visible;
  position: -webkit-sticky;
  position: sticky;
  font-family: 'NunitoSans', sans-serif;
  font-size: 30px;
    &:hover {
      background-color: #141414;
    }
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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
  position: relative;
  left: 650px;
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
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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

function Header() {
  return (
      <Nav>
        <Wrapper>
          <ImageWrapper>
            <img src={logo} alt='logo' draggable="false" />
          </ImageWrapper>
          <ShoppingCart>
            <ImageWrapper>
              <img src={shoppingCart} alt='shopping cart' draggable="false"/>
            </ImageWrapper>
          </ShoppingCart>
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

export default Header;