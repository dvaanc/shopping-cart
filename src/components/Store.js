import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import keysetInventory from './cart/cart-item';

function Store(props) {
  const inventory = keysetInventory;
  const addToCart = (e) => {
    const name = e.target.parentNode.childNodes[1].childNodes[0].dataset.name;
    const price = Number(e.target.parentNode.childNodes[1].childNodes[1].dataset.price);
    const img = e.target.parentNode.childNodes[0].childNodes[0].src;
    const item = { name, price, img }
    props.addToCart(item);
  }
  return (
  <Content>
    <Main>
      <CardContainer>
      {inventory.map((item, i) => {
        const uuid = uuidv4();
        return (
          <Card key={uuid}>
            <ImageWrapper>
              <img src={item.img} alt='ePBT Sniper'/>
            </ImageWrapper>
            <DivWrapper>
              <p data-name={item.name}>{item.name}</p>
              <p data-price={item.price}>${item.price}</p>
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

const StoreWRouter = withRouter(Store);
export default StoreWRouter;

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
  /* @media only screen and (max-width: 800px) {
    min-height: 15%;
    min-width: 15%;
    font-size: 15px;
  } */
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
