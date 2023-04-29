import {
  HeaderContainer,
  InputContainer,
  NavigationContainer,
  ShipAddressArrow,
  UserAddressContainer,
} from './styles'

import cartIcon from '../../assets/cart.svg'
import loginIcon from '../../assets/loginIcon.svg'
import deliverizeBox from '../../assets/deliverizeBox.png'
import deliverize from '../../assets/deliverize.png'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={deliverizeBox} alt="" />
        <img src={deliverize} alt="" />
      </div>
      <UserAddressContainer>
        <div>
          <span>Entrega:</span>
          <span>R. Antonio Braunce, 222</span>
        </div>
        <ShipAddressArrow>
          <div></div>
        </ShipAddressArrow>
      </UserAddressContainer>
      <InputContainer>
        <input
          placeholder="Busque por estabelecimento ou produtos"
          title="Buscar"
          type="text"
        />
      </InputContainer>
      <NavigationContainer>
        <NavLink to="">
          <img src={loginIcon} alt="" />
          <span>Entrar</span>
        </NavLink>
        <NavLink to="">
          <img src={cartIcon} alt="" />
          <span>Carrinho</span>
        </NavLink>
      </NavigationContainer>
    </HeaderContainer>
  )
}
