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

export interface CartIngredient {
  id: number
  count: number
  nm_item: string
  vl_item: number
}

export interface Cart {
  id: string
  title: string
  count: number
  cutlery: boolean
  total: number
  variant?: string
  ingredients: CartIngredient[]
}

interface CyclesContextType {
  setPopOverState: React.Dispatch<React.SetStateAction<Cart>>
  popOverState: Cart
  showPopover: boolean
  togglePopover: () => void
  isMenuOpen: boolean
  toggleMenu: () => void
  isCartOpen: boolean
  toggleCart: () => void
  ingredientsState: Item[]
  setIngredientsState: React.Dispatch<React.SetStateAction<Item[]>>
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cart: Cart[]
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
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
  const [cart, setCart] = useState<Cart[]>([])

  // quantidade de items (hamburger) para adicionar ao carrinho
  const [count, setCount] = useState<number>(1)

  // Search Input
  const [search, setSearch] = useState<string>('')

  // Menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // Cart
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  // popOverState
  const [popOverState, setPopOverState] = useState<Cart>({} as Cart)

  // show or hide popover
  const [showPopover, setShowPopOver] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen((state) => !state)
  }

  function toggleCart() {
    setIsCartOpen((state) => !state)
  }

  function togglePopover() {
    setShowPopOver(true)

    setTimeout(() => {
      setShowPopOver(false)
    }, 3000)
  }

  return (
    <CyclesContext.Provider
      value={{
        setPopOverState,
        showPopover,
        popOverState,
        togglePopover,
        toggleCart,
        isCartOpen,
        toggleMenu,
        isMenuOpen,
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
