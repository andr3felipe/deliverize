import React, { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { InputContainer } from './styles'

export function SearchInput() {
  const { search, setSearch } = useContext(CyclesContext)

  function handleSearchInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearch(e.target.value)
  }
  return (
    <InputContainer>
      <input
        onChange={(e) => handleSearchInputOnChange(e)}
        value={search}
        placeholder="Busque por estabelecimento ou produtos"
        title="Buscar"
        type="text"
      />
    </InputContainer>
  )
}
