import { CyclesContext } from '../../contexts/CyclesContext'
import { formatter } from '../../utils/formatter'
import { IngredientsContainer } from './styles'
import { useContext } from 'react'

interface IngredinetsProps {
  id: number
  title: string
  price: number
  count: number
}

export function Ingredients({ id, title, price, count }: IngredinetsProps) {
  const { setIngredientsState, ingredientsState } = useContext(CyclesContext)

  function handlePlus() {
    if (maxIngredientsAllowed.count < 8) {
      setIngredientsState((state) =>
        state.map((item) => {
          if (item.id === id) {
            return { ...item, count: count + 1 }
          } else {
            return item
          }
        }),
      )
    }
  }

  function handleMinus() {
    setIngredientsState((state) =>
      state.map((item) => {
        if (item.id === id && item.count > 0) {
          return { ...item, count: count - 1 }
        } else {
          return item
        }
      }),
    )
  }

  const maxIngredientsAllowed = ingredientsState.reduce(
    (acc, item) => {
      acc.count += item.count
      return acc
    },
    { count: 0 },
  )

  return (
    <IngredientsContainer>
      <div>
        <p>{title}</p>
        <span>{formatter.format(price)}</span>
      </div>
      <div>
        <button onClick={handleMinus} disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handlePlus} disabled={maxIngredientsAllowed.count > 7}>
          +
        </button>
      </div>
    </IngredientsContainer>
  )
}
