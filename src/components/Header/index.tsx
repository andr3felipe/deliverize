import {
  HeaderContainer,
  LogoContainer,
  MenuMobile,
  NavigationContainer,
  ShipAddressArrow,
  UserAddressContainer,
} from './styles'

import cartIcon from '../../assets/cart.svg'
import loginIcon from '../../assets/loginIcon.svg'
import deliverizeBox from '../../assets/deliverizeBox.png'
import deliverize from '../../assets/deliverize.png'
import { NavLink } from 'react-router-dom'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'
import { SearchInput } from '../SearchInput'

import { Menu } from '@mui/icons-material'
import { Popover } from '../Popover'

export function Header() {
  const { cart, toggleMenu, toggleCart, popOverState } =
    useContext(CyclesContext)

  return (
    <HeaderContainer>
      <MenuMobile>
        <Menu onClick={toggleMenu} />
      </MenuMobile>
      <LogoContainer>
        <img src={deliverizeBox} alt="" />
        <img src={deliverize} alt="" />
      </LogoContainer>
      <UserAddressContainer>
        <div>
          <span>Entrega:</span>
          <span>R. Antonio Braunce, 222</span>
        </div>
        <ShipAddressArrow>
          <button title="Show"></button>
        </ShipAddressArrow>
      </UserAddressContainer>

      <SearchInput />

      <NavigationContainer>
        <NavLink to="">
          <img src={loginIcon} alt="" />
          <span>Entrar</span>
        </NavLink>
        <NavLink onClick={toggleCart} to="">
          <img src={cartIcon} alt="" />
          <span>Carrinho</span>
          {cart.length > 0 ? <div>{cart.length}</div> : null}
        </NavLink>
      </NavigationContainer>
      <Popover
        count={popOverState.count}
        title={popOverState.title}
        ingredients={popOverState.ingredients}
        cutlery={popOverState.cutlery}
      />
    </HeaderContainer>
  )
}
