import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/homeimage.png';

function Home(props) {
  return (
    <Content>
      <Notice>INTERNATIONAL SERVICES CURRENTLY SUSPENDED FOR PHILIPPINES, INDIA, MALAYSIA, SINGAPORE, KOREA. PLEASE USE DHL ONLY</Notice>
        <Main>
          <ImageWrapper>
            <img src={homeImage} alt="keyboard" draggable="false"/>
          </ImageWrapper>
          <ImageContent>
            <h3>GROUP BUY LIVE</h3>
            <p>GMK NAUTILUS</p>
            <a href="https://dvaanc.github.io/shopping-cart/#/store">
              <button>SHOP NOW</button>
            </a>
          </ImageContent>
        </Main>
    </Content>
  )
}
const Content = styled.div`
  height: auto;
  background-color: red;
`
const Notice = styled.div`
  padding: 15px;
  height: 50px;
  text-align: center;
  background-color: #000000;
  font-size: 14px;
  letter-spacing: 3px;
  color: #ffffff;
`
const ImageWrapper = styled.div `
  width: 100%;
  height: 100%;
  z-index: 0;
  user-select: none;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
`
const Main = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #262128;

`
const ImageContent = styled.div`
  position: absolute;
  bottom: 90px;
  padding-left: 120px;
  z-index: 1;
  color: #ffffff;
  font-weight: 100;
  user-select: none;
  & h3 {
    font-size: 2rem;
    letter-spacing: .1em;
    
  }
  & p {
    margin: 20px 0;
    font-size: 3rem;
    letter-spacing: .1em;
  }
  & button {
    width: 300px;
    height: 55px;
    padding: 10px;
    font-size: 22px;
    letter-spacing: .1em;
    outline: none;
    border: none;
    border-radius: 25px;
    /* transition: transform 0.3s ease 0s; */
    &:hover {
      cursor: pointer;
      /* transform: scale(1.05)  */
    }
  }
`
export default Home;