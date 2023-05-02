import React, { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { InputContainer } from './styles'

interface SearchInputProps {
  variant?: string
}

export const SearchInput = ({ variant }: SearchInputProps) => {
  const { search, setSearch } = useContext(CyclesContext)

  function handleSearchInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearch(e.target.value)
  }
  return (
    <InputContainer variant={variant}>
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
