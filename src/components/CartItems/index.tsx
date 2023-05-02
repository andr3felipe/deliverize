import {
  CartAlign,
  CartBody,
  CartContainer,
  CartFooter,
  CartHead,
} from './styles'
import hamburger from '../../assets/hamburger.svg'
import { formatter } from '../../utils/formatter'

import { Cart } from '../../contexts/CyclesContext'

export const CartItems = ({
  title,
  id,
  ingredients,
  count,
  cutlery,
  variant,
  total,
}: Cart) => {
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
              <li>1 Carne 250gr</li>
              {ingredients.map((item) => {
                return (
                  <li key={item.nm_item}>
                    {item.count}x {item.nm_item}
                  </li>
                )
              })}
              <li>Molho Especial</li>
            </ul>
          </CartBody>
          <CartFooter>
            <p>
              <strong>Total:</strong> {formatter.format(total)}
            </p>
          </CartFooter>
        </CartAlign>
      </CartContainer>
    </>
  )
}
