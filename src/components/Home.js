import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import homeImage from '../assets/homeimage.png';

const Content = styled.div`
  height: auto;
  background-color: blue;
`
const Notice = styled.div`
  position: relative;
  top: 0;
  padding: 15px;
  height: 52px;
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
`

function Home() {
  return (
    <Content>
      <Notice>INTERNATIONAL SERVICES CURRENTLY SUSPENDED FOR PHILIPPINES, INDIA, MALAYSIA, SINGAPORE, KOREA. PLEASE USE DHL ONLY</Notice>
        <Header />
        <Main>
          <ImageWrapper>
            <img src={homeImage} alt="keyboard" draggable="false"/>
          </ImageWrapper>
        </Main>
      <Footer />
    </Content>
  )
}

export default Home;