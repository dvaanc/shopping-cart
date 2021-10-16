import React from 'react';
import styled from 'styled-components';
import Nav from './styles';

const Content = styled.div`
  height: auto;
  background-color: darkblue;
`
const Main = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`
const HeaderStore = styled(Nav)`
  background-color: #141414;
  &:hover {
  }
` 

function Store() {
  return (
    <Content>
      {/* <Header /> */}
      <Main>

      </Main>
    </Content>
  )
}

export default Store;