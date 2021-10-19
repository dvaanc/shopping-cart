import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import keysetInventory from './cart/cart-item';

function Store() {
  const addToCart = (e) => {
    console.log('test')
  }
  return (
  <Content>
    <Main>
      <CardContainer>
      {keysetInventory.map((item, i) => {
        const uuid = uuidv4();
        return (
          <Card key={uuid}>
            <ImageWrapper>
              <img src={item.img} alt='ePBT Sniper'/>
            </ImageWrapper>
            <DivWrapper>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </DivWrapper>
            <button onClick={addToCart}>Add to Cart</button>
          </Card>
        )
      })
      }

      </CardContainer>
    </Main>
  </Content>
  )
}
const Content = styled.div`
  height: auto;
  background-color: #262128;
`
const Main = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 70px;
  background-color: #262128;
`
const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 15px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25%;
  min-width: 15%;
  @media only screen and (max-width: 800px) {
    min-height: 10%;
    min-width: 15%;
    font-size: 15px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  & button {
    &:hover {
      cursor: pointer;
    }
  }
`
const ImageWrapper = styled.div `
  height: 80%;
  width: 100%;
  margin-bottom: 10px;
    &:hover {
      cursor: pointer;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
`
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: .1em;
  font-size: 20px;
  &p {
    margin-bottom: 5px;
  }
`
export default Store;