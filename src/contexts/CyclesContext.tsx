import React, { createContext, ReactNode, useState } from 'react'

export interface Item {
  id: number
  count: number
  nm_item: string
  vl_item: number
}

export interface Ingredient {
  group: string
  max_itens: number
  type: string
  itens: Item[]
}

export interface IProduct {
  id: string
  createdAt: string
  nm_product: string
  description: string
  vl_price: number
  vl_discount: number
  url_image: string
  ingredients: Ingredient[]
}

interface CyclesContextType {
  ingredientsState: Item[]
  setIngredientsState: React.Dispatch<React.SetStateAction<Item[]>>
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cart: IProduct[]
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  cutlery: boolean
  setCutlery: React.Dispatch<React.SetStateAction<boolean>>
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  // escolhas de ingredientes
  const [ingredientsState, setIngredientsState] = useState<Item[]>([])

  // listagem de produtos
  const [products, setProducts] = useState<IProduct[]>([])

  // precisa de talher? sim ou nao
  const [cutlery, setCutlery] = useState<boolean>(false)

  // carrinho
  const [cart, setCart] = useState<IProduct[]>([])

  // quantidade de items (hamburger) para adicionar ao carrinho
  const [count, setCount] = useState<number>(1)

  // Search Input
  const [search, setSearch] = useState<string>('')

  return (
    <CyclesContext.Provider
      value={{
        products,
        setProducts,
        ingredientsState,
        setIngredientsState,
        cutlery,
        setCutlery,
        cart,
        setCart,
        count,
        setCount,
        search,
        setSearch,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
