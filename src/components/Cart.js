import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  position: fixed;
  visibility: ${props => props.showCart};
  top: 0;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`
const Content = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: 350px;
  transition: right 0.85s ease-in-out 0s;
  background-color: grey;
  z-index: 6;
`

function Cart(props) {
  React.useEffect(() => {
    props.toggleCart.current = toggleCart;
  }, [])
  const toggleCart = (e) => {
    console.log('test')
    console.log(e)
    console.log(props.showCart)
  }
  return (
    <Parent>
      <Content>

      </Content>
    </Parent>
  )
}

export default Cart;