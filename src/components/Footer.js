import styled from 'styled-components';
import logo from '../assets/ghlogo.png'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  background-color: grey;
  color: white;
  font-family: 'NunitoSans', sans-serif;
  
  & p {
    margin-right: 10px;
  }
  & a {
    transition: transform 0.15s ease-in-out 0s;
    &:hover {
      transform: scale(1.2);
    }
    & img {
      height: 22px;
      width: 22px;
    }
  }
`
function Footer() {
  return (
    <Wrapper>
    <p>Copyright © 2021 dannyvtcao.</p>
    <a rel="noopener noreferrer" target="_blank" href="https://github.com/dvaanc">
      <img src={logo} alt="github"></img>
    </a>
    </Wrapper>
  )

}

export default Footer;