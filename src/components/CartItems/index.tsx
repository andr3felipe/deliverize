import {
  CartAlign,
  CartBody,
  CartContainer,
  CartFooter,
  CartHead,
} from './styles'
import hamburger from '../../assets/hamburger.svg'
import { formatter } from '../../utils/formatter'
import { useContext } from 'react'

import { Cart, CyclesContext } from '../../contexts/CyclesContext'

export const CartItems = ({ title, id, ingredients, count, total }: Cart) => {
  const { removeItemFromCart } = useContext(CyclesContext)

  return (
    <>
      <CartContainer>
        <CartAlign>
          <CartHead>
            <img alt="" title="hamburger" width="100px" src={hamburger} />
            <p>
              {count}x <strong>{title}</strong>
            </p>
          </CartHead>
          <CartBody>
            <p>Ingredients:</p>
            <ul>
              {ingredients.map((item) => {
                return (
                  <li key={item.nm_item}>
                    {item.count} x {item.nm_item}
                  </li>
                )
              })}
            </ul>
          </CartBody>
          <CartFooter>
            <p>
              <strong>Total:</strong> {formatter.format(total)}
            </p>
            <button
              type="button"
              title="remover"
              onClick={() => removeItemFromCart(id)}
            >
              Remover
            </button>
          </CartFooter>
        </CartAlign>
      </CartContainer>
    </>
  )
}
