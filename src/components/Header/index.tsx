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
import { CyclesContext } from '../../contexts/CyclesContext'
import React, { useContext } from 'react'

export function Header() {
  const { cart, search, setSearch } = useContext(CyclesContext)

  function handleSearchInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearch(e.target.value)
  }

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
          <button title="Show"></button>
        </ShipAddressArrow>
      </UserAddressContainer>
      <InputContainer>
        <input
          onChange={(e) => handleSearchInputOnChange(e)}
          value={search}
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
          {cart.length > 0 ? <div>{cart.length}</div> : null}
        </NavLink>
      </NavigationContainer>
    </HeaderContainer>
  )
}
