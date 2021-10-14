import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Notice = styled.div`
  position: relative;
  padding: 15px;
  text-align: center;
  background-color: #000000;
  font-size: 14px;
  letter-spacing: 3px;
  color: #ffffff;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #141414;
  min-height: 10vh;
  transition: background .3s ease-in-out .3s ease-in-out;
  &:hover img {
    cursor: pointer;
  }
`

function Header() {

  return (
    <header>
      <Notice>INTERNATIONAL SERVICES CURRENTLY SUSPENDED FOR PHILIPPINES, INDIA, MALAYSIA, SINGAPORE, KOREA. PLEASE USE DHL ONLY</Notice>
      <Nav>
        <img src={logo} alt='logo'/>
        <ul>
          <li>Home</li>
          <li>Store</li>
        </ul>
      </Nav>
    </header>
  )
}

export default Header;