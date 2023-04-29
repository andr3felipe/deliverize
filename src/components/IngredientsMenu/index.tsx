import { CyclesContext, Ingredient, Item } from '../../contexts/CyclesContext'
import { formatter } from '../../utils/formatter'
import { Ingredients } from '../Ingredients'
import {
  CutleryContainer,
  IngredientsFooter,
  IngredientsHead,
  IngredientsMenuContainer,
} from './style'
import { useContext, useEffect } from 'react'

interface IngredientsMenuProps {
  ingredients: Ingredient[]
  productDiscountPrice: number
  productId: string
}

export function IngredientsMenu({
  productId,
  ingredients,
  productDiscountPrice,
}: IngredientsMenuProps) {
  const {
    ingredientsState,
    setIngredientsState,
    cutlery,
    setCutlery,
    cart,
    setCart,
    count,
    setCount,
    products,
  } = useContext(CyclesContext)

  useEffect(() => {
    const array: Item[] = []
    ingredients[0].itens.map((item) => array.push({ ...item, count: 0 }))

    setIngredientsState(array)
  }, [setIngredientsState, ingredients])

  console.log(ingredientsState)

  function handleCutleryChange() {
    setCutlery(!cutlery)
  }

  function handleProductCountPlus() {
    setCount((state) => state + 1)
  }
  function handleProductCountMinus() {
    if (count > 1) {
      setCount((state) => state - 1)
    }
  }

  function handleAddCart(productId: string) {
    const getProduct = products.filter((item) => item.id === productId)

    const object = {
      title: getProduct,
    }
  }

  const ingredientsTotalPrice = ingredientsState.reduce(
    (acc, item) => {
      acc.total += item.count * item.vl_item
      return acc
    },
    {
      total: 0,
    },
  )

  const total = count * productDiscountPrice + ingredientsTotalPrice.total

  return (
    <IngredientsMenuContainer>
      <IngredientsHead>
        {JSON.stringify(products)}
        <p>Adicionar Ingredientes</p>
        <span>Até {ingredients[0].max_itens} ingredientes.</span>
      </IngredientsHead>
      {ingredientsState.map((item) => {
        return (
          <Ingredients
            key={item.id}
            id={item.id}
            count={item.count}
            title={item.nm_item}
            price={item.vl_item}
          />
        )
      })}

      <IngredientsFooter>
        <div>
          <label htmlFor="cutlery"></label>
          <p>{ingredients[1].group}</p>
          <input
            onChange={handleCutleryChange}
            checked={cutlery}
            title="Precisa de talher?"
            type="checkbox"
            name="cutlery"
            id=""
          />
        </div>
        <CutleryContainer>
          <div>
            <button onClick={handleProductCountMinus} disabled={count === 1}>
              -
            </button>
            <span>{count}</span>
            <button onClick={handleProductCountPlus}>+</button>
          </div>

          <div>
            <button onClick={() => handleAddCart(productId)}>
              Adicionar {formatter.format(total)}
            </button>
          </div>
        </CutleryContainer>
      </IngredientsFooter>
    </IngredientsMenuContainer>
  )
}
