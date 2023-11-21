
import styled from 'styled-components'
import * as Icon from 'react-feather'
import logo from '../images/Logos/LOGO1.png'
import { Link } from 'react-router-dom'

function NavbarBottom() {
  return (
    <>
    <NavWrapper>
    <NavBottom>
        <Menu>
          <Icon.Menu className="menu" />
          <p>MENY</p>
        </Menu>
        <User>
          <Icon.User className="user" />
          <p>LOGGA IN</p>
        </User>
        <Link to={"/"}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        </Link>
        <Favorites>
          <Icon.Moon className="favorites" />
          <p>FAVORITER</p>
        </Favorites>
        <Cart>
          <Icon.ShoppingCart className="cart" />
          <p>VARUKORG</p>
        </Cart>
      </NavBottom>
    </NavWrapper>
    </>
  )
}
export default NavbarBottom

const NavWrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;
`

const NavBottom = styled.div`
display: flex;
width: 100%;
height: 60px;
background-color: #353240;
color: white;
justify-content: space-around;
align-items: center;
`

const Menu = styled.div`
z-index: 1000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  .menu {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  p {
    margin: 0;
  }
`
const User = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  .user {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  p {
    margin: 0;
  }
`

const Logo = styled.div`

`

const Favorites = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  .favorites {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  p {
    margin: 0;
  }
`
const Cart = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  .cart {
    width: 28px;
    height: 28px;
    stroke: currentColor;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  p {
    margin: 0;
  }
`
