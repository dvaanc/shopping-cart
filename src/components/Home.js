import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  background-color: grey;
`
const Notice = styled.div`
  position: relative;
  padding: 15px;
  height: 50px;
  text-align: center;
  background-color: #000000;
  font-size: 14px;
  letter-spacing: 3px;
  color: #ffffff;
`

function Home() {
  return (
    <Content>
      <Notice>INTERNATIONAL SERVICES CURRENTLY SUSPENDED FOR PHILIPPINES, INDIA, MALAYSIA, SINGAPORE, KOREA. PLEASE USE DHL ONLY</Notice>
        <Header />
    </Content>
  )
}

export default Home;