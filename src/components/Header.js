import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 10px;
  height: 15vh;
  width: 100%;
  box-shadow: 0 -1px rgb(255 255 255 / 25%) inset;
  background-color: rgba(0, 0, 0, 0);
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
const ImageWrapper = styled.div `
  min-width: 15%;
    &:hover {
      cursor: pointer;
    }
    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
`
const ShoppingCart = styled.div `
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: white;
  transition: transform .3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2)
  }


`
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 100%;
  width: 100%;
  list-style-type: none;
  & li {
    padding: 2px;
    margin-left: 21px;
    margin-right: 21px;
    text-transform: uppercase;
    letter-spacing: .2em;
    & a {
      color: #ffffff;
      text-decoration: none;
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
const Group = styled.div`
  display: flex;
  flex-direction: row;
`

function Header() {
  return (
      <Nav>
        <div>
          <ImageWrapper>
            <img src={logo} alt='logo' draggable="false" />
          </ImageWrapper>
          <ShoppingCart>
            
          </ShoppingCart>
        </div>
        <List>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/'>STORE</a>
          </li>
        </List>
      </Nav>
  )
}

export default Header;