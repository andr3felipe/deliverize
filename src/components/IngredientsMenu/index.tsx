import { Minus, Plus } from '@phosphor-icons/react'
import { CyclesContext, Ingredient, Item } from '../../contexts/CyclesContext'
import { formatter } from '../../utils/formatter'
import { Ingredients } from '../Ingredients'
import {
  AddButtonContainer,
  IngredientsFooter,
  IngredientsHead,
  IngredientsMenuContainer,
} from './style'
import { useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
    setCart,
    count,
    setCount,
    products,
    togglePopover,
    setPopOverState,
  } = useContext(CyclesContext)

  useEffect(() => {
    const array: Item[] = []
    ingredients[0].itens.map((item) => array.push({ ...item, count: 0 }))

    setIngredientsState(array)
  }, [setIngredientsState, ingredients])

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
    const getIngredients = ingredientsState.filter((item) => item.count > 0)

    const createId = uuidv4()

    const object: any = {
      id: createId,
      title: getProduct[0].nm_product,
      ingredients: getIngredients,
      total,
      cutlery,
      count,
    }

    setPopOverState(object)

    if (object.title === 'Oferta Picanha Cheddar Bacon') {
      object.ingredients[4] = { id: 5, count: 1, nm_item: 'Carne 250gr' }
      object.ingredients[5] = {
        id: 6,
        count: 1,
        nm_item: 'Molho Especial',
      }
    }

    setCart((state) => [...state, object])
  }

  const maxIngredientsAllowed = ingredientsState.reduce(
    (acc, item) => {
      acc.count += item.count
      return acc
    },
    { count: 0 },
  )

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
        <div>
          <p>Adicionar Ingredientes</p>
          <span>Até {ingredients[0].max_itens} ingredientes.</span>
        </div>
        <div>
          <span
            style={{
              color: maxIngredientsAllowed.count === 8 ? '#ED3237' : '',
            }}
          >
            Ingredientes restantes: {8 - maxIngredientsAllowed.count}
          </span>
        </div>
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
          <p>{ingredients[1].group}</p>
          <label htmlFor="cutlery">
            <input
              onChange={handleCutleryChange}
              checked={cutlery}
              title="Precisa de talher?"
              type="checkbox"
              name="cutlery"
              id=""
            />
          </label>
        </div>
        <AddButtonContainer>
          <div>
            <button
              title="Minus"
              onClick={handleProductCountMinus}
              disabled={count === 1}
            >
              <Minus size={18} weight="bold" />
            </button>
            <span>{count}</span>
            <button title="Plus" onClick={handleProductCountPlus}>
              <Plus size={18} weight="bold" />
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                handleAddCart(productId)
                togglePopover()
              }}
            >
              Adicionar {formatter.format(total)}
            </button>
          </div>
        </AddButtonContainer>
      </IngredientsFooter>
    </IngredientsMenuContainer>
  )
}
