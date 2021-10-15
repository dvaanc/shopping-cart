import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  min-height: 17vh;
  user-select: none;
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
export default Nav;